import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import { describe } from "mocha";
import app from "../src/app.js";
import conn from "../src/db-manager.js";
import { genRandValue, genToken, getCurrDateVal } from "../src/utils.js";

chai.use(chaiHttp);
const http = chai.request(app).keepOpen();

describe("Integration tests", () => {
  // it("Test database connection", async (done) => {
  //   try {
  //     await conn;
  //     done();
  //   } catch (err) {
  //     done(new Error(err));
  //   }
  // });

  it("Test server", async () => {
    const res = await http.get("/");
    expect(res).to.have.status(200);
    expect(res.text).to.eq("Ok");
  });

  it("Test registration", async () => {
    const res = await http
      .post("/api/v1/register")
      .send({ email: "danyal_saleem@hotmail.com" });
    expect(res).to.have.status(200);
  });

  it("Test cache", async () => {
    const token = genToken();
    const docMock = { key: "opensessame" ,value: genRandValue(), timeStamp: getCurrDateVal()};
    const res = await http
      .post("/api/v1/service/key")
      .set("jump-auth-token", token)
      .send(docMock);
    expect(res).to.have.status(200);
    expect(res.text).to.be.a('string');
  });
});
