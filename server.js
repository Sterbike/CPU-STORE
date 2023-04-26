require("dotenv").config();
const express = require("express");
const app = express();
const dbConnect = require("./middlewares/dbConnection");
dbConnect();
const PORT = process.env.PORT || 3500;

app.get("/", (req, res) => {
  try {
    res.status(200).render("index");
  } catch (error) {
    res.status(500).json({ msg: "Valami elromlott!" });
  }
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
