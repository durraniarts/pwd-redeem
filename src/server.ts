import express from "express";
import { nextApp, nextHandler } from "./lib/next-utils";

const app = express();

const PORT = Number(process.env.PORT) || 3000;

// const createContext = ({
//   req,
//   res,
// }: trpcExpress.CreateExpressContextOptions) => ({ req, res });

const start = async () => {
  //   const payload = await getPayloadClient({
  //     initOptions: {
  //       express: app,
  //       onInit: async (cms) => {
  //         cms.logger.info(`Admin URL: ${cms.getAdminURL()}`);
  //       },
  //     },
  //   });

  nextApp
    .prepare()
    .then(() => {
      //   app.use(
      //     "/api/trpc",
      //     trpcExpress.createExpressMiddleware({
      //       router: appRouter,
      //       createContext,
      //     })
      //   );

      app.use((req, res) => nextHandler(req, res));
      // payload.logge.info(`Next.js is ready on http://localhost:${PORT}`);

      app.listen(PORT, () => {
        console.log("its running");
        // payload.logger.info(
        //   `Next.js App URL: ${process.env.NEXT_PUBLIC_SERVER_URL}`
        // );
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

start();
