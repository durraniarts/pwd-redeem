import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "@/lib/db";
import { cashbackengineAdminUsers } from "dealguru/drizzle/schema";
import crypto from "crypto";
import { and, eq } from "drizzle-orm";
import { NextApiRequest, NextApiResponse } from "next";

function passwordEncryption(password: string): string {
  const sha1Password = crypto.createHash("sha1").update(password).digest("hex");
  const encryptedPassword = crypto
    .createHash("md5")
    .update(sha1Password)
    .digest("hex");
  return encryptedPassword;
}

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "User Login",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "email" },
        username: { label: "Username", type: "text", placeholder: "xyz" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials.password) {
          throw new Error("Please enter username and password");
        }

        const encryptedPassword = passwordEncryption(credentials.password);

        // const users = await db
        //   .select()
        //   .from(cashbackengineAdminUsers)
        //   .where(
        //     and(
        //       eq(cashbackengineAdminUsers.username, credentials.username),
        //       eq(cashbackengineAdminUsers.password, encryptedPassword)
        //     )
        //   )
        //   .limit(1);

        // if (users.length === 0) {
        //   throw new Error("Invalid username or password");
        // }

        // const user = users[0];

        // if (user.status === "inactive") {
        //   throw new Error("Sorry, your account is deactivated");
        // }

        return {
          //   id: user.userId.toString(),
          id: "1",
          name: credentials.username,
          //   role: user.role,
          email: credentials.email,
        };
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      const newToken = token;
      if (user) {
        newToken.id = user.id;
        newToken.name = user.name;
        // newToken.role = user.role;
        newToken.email = user.email;
      }
      return newToken;
    },
    async session({ session, token }) {
      const newSession = session;
      if (token) {
        if (!newSession.user) {
          newSession.user = {};
        }

        newSession.user.name = token.name;
        newSession.user.email = token.email;
      }
      return newSession;
    },
  },
};

const handler = (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, authOptions);

export { handler as GET, handler as POST };
