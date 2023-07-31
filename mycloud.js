const express = require("express");
const fs = require("fs");
const app = express();
const { config } = require("./server/config");
const views = __dirname + "/server/views"
app.get("*", (req, res) => {
    console.log(req.path)
  if (req.path == "/") {
    if (config.password != null) {
      res.sendFile(views + "/main/index.html");
    } else {
      res.redirect("/home");
    }
  }
});

app.listen(config.port, () => {
  console.log(`Started MyCloud on ${config.port}`);
});
