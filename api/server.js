const express = require("express");
const server = express();

oneRouter = require("../router/oneRouter.js");

server.use(express.json());

server.use("/api", oneRouter); // remember order matters, router stays last

//sanity test for Mr. Hernandez

server.get("/", (req, res) => {
  res.status(200).json({ message: "you can see into the server....SWEET!!" });
});

module.exports = server;
