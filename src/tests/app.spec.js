const app = require("../app");
const request = require("supertest");

describe("GET /facebook/page", function() {
  it("returns url pathname", function(done) {
    const url = "https://www.npmjs.com/package/supertest";

    return request(app)
      .post("/facebook/page")
      .send({ url })
      .expect(200)
      .then(response => {
        expect(response.body).toEqual({
          id: "/package/supertest",
          name: "foo",
          link: "https://facebook.com/foo/"
        });
        done();
      });
  });
});
