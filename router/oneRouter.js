const express = require("express");

const router = express.Router();

const Users = require("./oneModel.js");

router.get("/", (req, res) => {
  res.send("It's alive!");
});

router.get("/users", (req, res) => {
  Users.get()
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post("/users", (req, res) => {
  const user = req.body;

  Users.add(user)
    .then(bug => {
      console.log(bug);
      res.status(200).json(bug);
      console.log(bug);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.delete("/users/:id", (req, res) => {
  const id = req.params.id;

  Users.deleteUser(id)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      res.status(500).json({ message: "he not gone!" });
    });
});

module.exports = router;
