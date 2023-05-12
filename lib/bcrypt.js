const { hashSync, compareSync } = require("bcrypt");

const salt = 10;

function generateHash(password) {
  return hashSync(password, salt);
}

function compareHash(password, hash) {
  return compareSync(password, hash);
}

module.exports = { generateHash, compareHash };
