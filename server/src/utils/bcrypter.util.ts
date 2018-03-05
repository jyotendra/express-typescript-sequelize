import * as bcrypt from "bcrypt";
import * as bluebird from "bluebird";

const saltRounds: number = 10;


export function getHash(pass: string): bluebird<string> {
    return bluebird.resolve(bcrypt.hash(pass, saltRounds));
}

export function compareHash(pass: string, hashedPass: string): bluebird<boolean> {
    return bluebird.resolve(bcrypt.compare(pass, hashedPass));
}