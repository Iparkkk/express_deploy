import express from "express";

const app = express();
const port = 4000;

app.listen(port, () => {
  console.log(`API listening on Port: ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.get("/vercel", (req, res) => {
  res.send("Deploy on Vercel");
});

module.exports = app;
