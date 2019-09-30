import request from "supertest";

describe("getty ingest", () => {
  it("200s with an empty POST", done => {
    request("https://gettyingest.boclips.com")
      .post("/")
      .set("content-type", "application/json")
      .expect(200, done);
  });
});
