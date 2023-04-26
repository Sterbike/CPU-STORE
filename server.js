require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3500;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  try {
    res.status(200).render("index");
  } catch (error) {
    res.status(500).json({ msg: "Valami elromlott!" });
  }
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
