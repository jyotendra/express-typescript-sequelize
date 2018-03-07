import { expect } from "chai";
import "mocha";

const hello: () => string = () => "Hello world!";

describe("Hello function", () => {

    it("should return hello world", () => {
      const result: string = hello();
      expect(result).to.equal("Hello world!");
    });
  });