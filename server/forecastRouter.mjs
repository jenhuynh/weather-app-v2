import express from "express";
import fetch from "node-fetch";
// import * as db from "./db.mjs";

const forecastRouter = express.Router();
//get method
forecastRouter.get("/", (request, response) => {
  // fetch from API (async, returns a response object
  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?q=Sunnyvale&appid=2a0d2423a6b833f34886eef2eb9b0175",
  )
    //first gets the response then turns it into a json object, transform the response from step 1 to a JSON (async) <-- first “then”
    .then((res) => {
      console.log(res, "ress");
      return res.json();
    })
    //take the json from above and return it to the user <-- second “then”: its variable “data” is the transformed json from step 2
    .then((data) => {
      // In express, this would be response.json(data)
      response.json(data.list);
    });
});

export default forecastRouter;
