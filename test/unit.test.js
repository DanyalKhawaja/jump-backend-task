import { expect } from "chai";
import { dateVariance, genRandValue, getCurrDateVal } from "../utils.js";

describe("Unit tests", () => {
  it("Test genRandValue", (done) => {
    expect(genRandValue()).to.be.a("string");
    done();
  });
  it("Test getCurrDateVal", (done) => {
    expect(getCurrDateVal()).to.be.a("number");
    done();
  });
  it("Test dateVariance", (done) => {
    expect(dateVariance()).to.be.a("number");
    done();
  });
});
