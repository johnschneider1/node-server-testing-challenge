const request = require("supertest");
const server = require("../api/server.js");
const db = require("../data/dbConfig.js");
const Users = require("../router/oneModel.js");

describe("oneRouter.js", () => {
  describe("POSt /api/users", () => {
    it("returns 200 ok", () => {
      return request(server)
        .get("/api/users")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
    describe("add()", () => {
      beforeEach(async () => {
        await db("users").truncate();
      });

      it("should add users to the db", async () => {
        await Users.add({ username: "bill", password: "ted" });

        let users = await db("users");

        expect(users).toHaveLength(1);
      });
    });
  });
});

// describe("add()", () => {
//     it("should add users to the db", async () => {
//       await Users.add({ username: "bill" });

//       let users = await db("users");

//       expect(users).toHaveLength(2);
//     });
//   });

//   it("successful delete", () => {
//     return request(server)
//       .delete("/api/users/")
//       .then(res => {
//         expect(res.status).toBe(200);
//         expect(res.body).toBe(1);
//       });
//   });
