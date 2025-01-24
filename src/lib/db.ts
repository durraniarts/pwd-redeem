import { MySql2Database, drizzle } from "drizzle-orm/mysql2";
import { Pool, createPool } from "mysql2";
import { MySQLWithReplicas, withReplicas } from "drizzle-orm/mysql-core";
import * as schema from "../drizzle/schema";

let dbInstance:
  | MySql2Database<typeof schema>
  | MySQLWithReplicas<MySql2Database<typeof schema>>
  | null
  | undefined;

const getConnection = () => {
  let primary: Pool | null = null;
  let readonly: Pool | null = null;

  if (process.env.DB_URL) {
    console.log("Connecting to DB using URL");
    primary = createPool({
      uri: process.env.DB_URL,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
  } else {
    primary = createPool({
      socketPath: process.env.DB_SOCKET,
      host: !process.env.DB_SOCKET ? process.env.DB_HOST : undefined,
      port: parseInt(process.env.DB_PORT || "3306", 10),
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
  }

  if (process.env.DB_READONLY_URL) {
    readonly = createPool({
      uri: process.env.DB_READONLY_URL,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
  } else if (process.env.DB_READONLY_SOCKET) {
    readonly = createPool({
      socketPath: process.env.DB_READONLY_SOCKET,
      host: !process.env.DB_READONLY_SOCKET
        ? process.env.DB_READONLY_HOST || process.env.DB_HOST
        : undefined,
      port: parseInt(
        process.env.DB_READONLY_PORT || process.env.DB_PORT || "3306",
        10
      ),
      user: process.env.DB_READONLY_USERNAME || process.env.DB_USERNAME,
      password: process.env.DB_READONLY_PASSWORD || process.env.DB_PASSWORD,
      database: process.env.DB_READONLY_NAME || process.env.DB_NAME,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
  }

  primary.on("connection", (c) => {
    c.query("SET sql_mode = ''");
  });

  if (readonly) {
    readonly.on("connection", (c) => {
      c.query("SET sql_mode = ''");
    });
  }

  primary.on("error", (err) => {
    dbInstance = null;
    throw err;
  });

  primary.on("end", () => {
    dbInstance = null;
  });

  primary.on("close", () => {
    dbInstance = null;
  });

  return [primary, readonly];
};

const getOrCreateDB = () => {
  if (dbInstance !== null && dbInstance !== undefined) {
    return dbInstance;
  }

  const [primary, readonly] = getConnection();

  if (!primary) {
    throw new Error("Could not connect to DB");
  }

  if (readonly === null) {
    dbInstance = drizzle(primary, { schema, mode: "default" });
  } else {
    dbInstance = withReplicas(drizzle(primary, { schema, mode: "default" }), [
      drizzle(readonly, { schema, mode: "default" }),
    ]);
  }

  return dbInstance;
};

export const db = getOrCreateDB();
