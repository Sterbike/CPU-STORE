require("dotenv").config();
const express = require("express");
const app = express();
const dbConnect = require("./middlewares/dbConnection");

app.get("/", (req, res) => {
  try {
    res.status(200).render("index");
  } catch (error) {
    res.status(500).json({ msg: "Valami elromlott!" });
  }
});
dbConnect();
const PORT = process.env.PORT || 3500;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
