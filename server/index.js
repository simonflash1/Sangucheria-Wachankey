const express = require("express");
const server = express();

server.get("/", (req, res) => {
    res.send("asdf")
    res.end()});


server.listen(3000, () => {console.log("listening on port 3000")});