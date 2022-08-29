import express from "express";
import pg from "pg";
//import axios from "axios";
import dotenv from "dotenv";
import cors from "cors";

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

const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

//lets get the questions

app.get("/questions", (req, res) => {
  console.log("truck");
  pool.query("SELECT * FROM questions").then((result) => {
    res.send(result.rows);
    console.log("server get questions", result.rows);
  });
});

// lets get the answers by questionid
app.get("/answers/:id", (req, res) => {
  const Qid = req.params.id;
  pool
    .query("SELECT * FROM answers WHERE questionid = $1", [Qid])
    .then((result) => {
      const answers = result.rows;
      console.log("server get answers", answers);
      res.send(answers);
    });
});
