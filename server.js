const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());
var cors = require("cors");
app.use(cors());

app.listen(8080, () => {
  console.log("listening on 8080");
});

app.use("/", express.static(path.join(__dirname, "front/public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "front/public/index.html"));
});

app.get("/community", (req, res) => {
  res.send("커뮤니티 페이지입니다.");
});
