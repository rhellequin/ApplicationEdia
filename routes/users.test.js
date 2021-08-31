

var app = require("../app");
var request = require("supertest");

test("Validation du test", async (done) => {
    await request(app).post("/importdata/test")
      .send({level: 5})
      .expect(200)
      .expect({ result: true, level: 5});
    done();
   });

