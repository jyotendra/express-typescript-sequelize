import { expect } from "chai";
import "mocha";

import { generateToken, validateToken } from "../src/utils/jwt.util";

const hello: () => string = () => "Hello world!";

describe("Hello function", () => {
  it("should return hello world", () => {
    const result: string = hello();
    expect(result).to.equal("Hello world!");
  });

  it("should create json token", () => {
    generateToken({ id: 1, email: "abc@gmail.com" })
    .then(token => expect(token).to.be.an("object"))
    .catch(err => console.log("errr", err));
  });
});


