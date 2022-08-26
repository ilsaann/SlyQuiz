import express from "express";
import pg from "pg";

import dotenv from "dotenv";

dotenv.config();

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ...(process.env.NODE_ENV === "production"
    ? {
        ssl: {
          rejectUnauthorized: false,
        },
      }
    : {}),
});

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

//lets get the questions
app.get("/questions", (req, res) => {
  pool.query("SELECT * FROM questions").then((result) => {
    const strung = JSON.stringify(result.rows);
    res.send(result.rows);
    console.log(result.rows);
  });
});

//lets get the answers by questionid
app.get("/answer/id", (req, res) => {
  const Qid = req.id;
  pool
    .query("SELECT * FROM answers WHERE questionid=$1", [Qid])
    .then((result) => {
      const answers = JSON.stringify(result.rows);
      console.log(answers);
      res.send(answers);
    });
});
