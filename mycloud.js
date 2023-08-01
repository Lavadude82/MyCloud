const express = require("express");
const fs = require("fs");
const app = express();
const { config } = require("./server/config");
const views = __dirname + "/server/views"
app.use(express.json())
app.get("*", (req, res) => {
    console.log(req.path)
  if (req.path == "/") {
    if (config.password != null) {
      res.sendFile(views + "/main/index.html");
    } else {
      res.redirect("/home");
    }
  }
  if( req.path == "/favicon"){
    res.sendFile(__dirname + "/public/favicon.png")
  }
  if( req.path == "/icon"){
    res.sendFile(__dirname + "/public/icon.png")
  }
  if(req.path == "/home"){
    res.sendFile(views + "/Home/index.html")
  }
  res.sendFile(views + "/404/index.html")
});
app.post("/api/login",(req,res)=>{
let pw = atob(req.body.pw)

  res.json({correct:pw == config.password})

})
app.listen(config.port, () => {
  console.log(`Started MyCloud on ${config.port}`);
});
