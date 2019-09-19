const db = require("../data/dbConfig.js");

module.exports = {
  get,
  add,
  deleteUser
};

function get() {
  return db("users");
}

function add(user) {
  return db("users").insert(user);
}

function deleteUser(id) {
  return db("users")
    .where({ id: id })
    .del();
}
