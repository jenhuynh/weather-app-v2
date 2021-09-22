import express from "express";
import mime from "mime-types";

import taskRouter from "./taskRouter.mjs";

import forecastRouter from "./forecastRouter.mjs";

const app = express();

// const fetch = require("node-fetch");
// app.use("/api/tasks", taskRouter);

app.use("/api/forecast", forecastRouter);

// app.get("/api/forecast", (request, response) => {
//   fetch(
//     "https://api.openweathermap.org/data/2.5/forecast?q=Seattle&appid=2a0d2423a6b833f34886eef2eb9b0175",
//   ).then((response) => {
//     // const test = await res.json();
//     // console.log(test);
//     // response.json(test);
//     // console.log(res);
//     // response.json(res);
//     response.json();
//     // .then(res) => response.json)
//     // .then(a => {consolelog(a), // do stuff here}
//   });
// });

// app.get("/api/forecast", async (request, response) => {
//   await fetch(
//     "https://api.openweathermap.org/data/2.5/forecast?q=Seattle&appid=2a0d2423a6b833f34886eef2eb9b0175",
//   ).then((response) => {
//     // const test = await res.json();
//     // console.log(test);
//     // response.json(test);
//     // console.log(res);
//     // response.json(res);
//     response.json();
//     // .then(res) => response.json)
//     // .then(a => {consolelog(a), // do stuff here}
//   });
// });

// Do not comment out or delete this end point. The React development server
// won't start until it pings this end point successfully.
app.get("/api/ping", (request, response) =>
  response.json({ response: "pong" }),
);

if (process.env?.SERVE_REACT?.toLowerCase() === "true") {
  app.use(
    express.static("/app", {
      maxAge: "1d",
      setHeaders: (res, path) =>
        ["application/json", "text/html"].includes(mime.lookup(path)) &&
        res.setHeader("Cache-Control", "public, max-age=0"),
    }),
  );

  app.get("*", (req, res) => {
    res.sendFile("/app/index.html");
  });
}

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.info(`Example server listening at http://localhost:${port}`);
});
