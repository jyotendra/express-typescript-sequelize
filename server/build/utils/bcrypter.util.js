"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcrypt");
const bluebird = require("bluebird");
const saltRounds = 10;
function getHash(pass) {
    return bluebird.resolve(bcrypt.hash(pass, saltRounds));
}
exports.getHash = getHash;
function compareHash(pass, hashedPass) {
    return bluebird.resolve(bcrypt.compare(pass, hashedPass));
}
exports.compareHash = compareHash;

//# sourceMappingURL=bcrypter.util.js.map
