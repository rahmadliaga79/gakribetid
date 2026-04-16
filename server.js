const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.json());

app.post("/track", (req, res) => {
  let data = JSON.parse(fs.readFileSync("data.json"));
  data.clicks += 1;
  fs.writeFileSync("data.json", JSON.stringify(data));
  res.send({status: "ok"});
});

app.get("/data", (req, res) => {
  let data = JSON.parse(fs.readFileSync("data.json"));
  res.send(data);
});

app.listen(3000, () => console.log("Server jalan"));
