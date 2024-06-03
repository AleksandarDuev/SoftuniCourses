const { promisify } = require("util");
const jsonwebtoken = require("jsonwebtoken");

//turns the callback syntax to promise based one.

const jwt = {
    sign: promisify(jsonwebtoken.sign),
    verify: promisify(jsonwebtoken.verify),
};

module.exports = jwt;
