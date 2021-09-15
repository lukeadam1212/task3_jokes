import express, { response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import colors from "colors";
import fetch from "node-fetch";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const CHUCK_NORRIS_API = process.env.CHUCK_NORRIS_API;

//! middle wares
app.use(
  cors({
    origin: "http://127.0.0.1:5500",
  })
);
app.use(express.json());

// //! routes
// // main route
app.get("/", (req, res) => res.send(`API is running...`));

// GET returns 10 random jokes
app.get("/api/jokes/", async function (req, res) {
  const allJokes = await fetch("https://api.icndb.com/jokes/random/100");
  const joke = await allJokes.json();
  res.json(joke);
  //   const newJokes = JSON.stringify(joke);
});

//! Starting server
app.listen(PORT, () =>
  console.log(`Server is running on port ${PORT.random}....`)
);
