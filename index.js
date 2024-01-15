const express = require("express");
require("dotenv").config();
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.status(200).send("Hello Would");
});

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${port}`);
});
