import request from "request-promise-native";

describe("getty ingest", () => {
  it("200s with an empty POST", done => {
    request(
      {
        method: "POST",
        uri: "https://gettyingest.boclips.com",
        header: {
          "content-type": "application/json"
        }
      },
      (_, response) => {
        expect(response.statusCode).toBe(200);

        done();
      }
    );
  });
});
