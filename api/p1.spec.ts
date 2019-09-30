import request from "supertest";

describe("Boclips for Teacher user", () => {
  it("can log in", done => {
    request("https://api.boclips.com/v1")
      .post("/token")
      .send(
        `grant_type=password&username=${process.env.TEACHERS_USERNAME}&password=${process.env.TEACHERS_PASSWORD}&client_id=teachers`
      )
      .expect(200, done);
  });
});
