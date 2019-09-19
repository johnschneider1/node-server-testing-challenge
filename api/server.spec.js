const request = require("supertest");
const server = require("./server.js");

describe("server.js", () => {
  describe("GET /", () => {
    it("returns 200 ok", () => {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
    it("should return {message: 'you can see into the server....SWEET!!'}", async () => {
      const res = await request(server).get("/");

      expect(res.body.message).toBe("you can see into the server....SWEET!!");
      expect(res.body).toEqual({
        message: "you can see into the server....SWEET!!"
      });
    });
  });
});
