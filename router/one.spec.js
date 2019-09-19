const request = require("supertest");
const server = require("../api/server.js");
const db = require("../data/dbConfig.js");

describe("oneRouter.js", () => {
  describe("POSt /api/users", () => {
    it("returns 200 ok", () => {
      return request(server)
        .get("/api/users")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
    it("successful delete", () => {
      return request(server)
        .delete("/api/users/")
        .then(res => {
          expect(res.status).toBe(200);
          expect(res.body).toBe(1);
        });
    });
  });
});
