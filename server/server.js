const http = require('http');
const path = require("path");
const express = require('express');
// const socialRoutes = require("@colyseus/social/express").default;


let homepage_path = (path.join(__dirname + "/../homepage/build/"));

const port = process.env.PORT || 3000;
const app = express();
let fileTypes = [".css", ".png", ".jpg", ".js", ".pdf", ".json"];

app.use(express.json());

const server = http.createServer(app);

// app.get('/', (req, res) => {
//   console.log("hello")
//   res.send("Hello World2!");
// });

//app.get("*.css", function(req, res) {
//  // console.log("here in css" + req.path);
//  p = req.path;
//  fileloc = p.substring(p.lastIndexOf("/"));
//  // console.log("$$$$$ " +'/front/static/css' + fileloc );
//  res.sendFile(path.join(homepage_path + "static/css" + fileloc));
//});
//
//app.get("*.js", function(req, res) {
//  p = req.path;
//  fileloc = p.substring(p.lastIndexOf("/"));
//  // console.log("$$$$$" +'/front/static/js' + fileloc );
//  res.sendFile(path.join(homepage_path + "static/js" + fileloc));
//});
//
//app.get("*.png", function(req, res) {
//  // console.log(req.path)
//  res.sendFile(path.join(homepage_path + req.path));
//});
//
//app.get("*.jpg", function(req, res) {
//  res.sendFile(path.join(homepage_path + req.path));
//});
//
//app.get("/", function(req, res) {
//  console.log(path.join(homepage_path + "index.html"))
//  res.sendFile(path.join(homepage_path + "index.html"));
//});

app.get("/*", function(req, res) {
    let flag = false;
    let p;
    for (let i = 0; i < fileTypes.length; i++)
        {
            p = req.path.substring(req.path.length-fileTypes[i].length);
            if(p === fileTypes[i] || p === fileTypes[i].toUpperCase())
                flag = true;
        }
//    console.log(p, flag)
    if(flag)
    {
        res.sendFile(path.join(homepage_path + req.path));
    }
    else
    {
        res.sendFile(path.join(homepage_path + "index.html"));
    }
});

app.listen(port, () => console.log(`Listening on ws://localhost:${port}`));

// app.get('/', (req, res) => {
//   res.sendFile('/home/shelem/Shelem/server/client/test.html');
// });
