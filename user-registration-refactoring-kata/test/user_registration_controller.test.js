const app = require("../src/server"); // Link to your server file
const { StatusCodes } = require("http-status-codes");
const supertest = require("supertest");
const request = supertest(app);
let UserRegistration = require("../src/user_registration_controller");

describe("UserRegistrationController", () => {
  it("gets the test endpoint", async (done) => {
    const response = await request.get("/test");

    expect(response.status).toBe(StatusCodes.OK);
    expect(response.body.message).toBe("pass!");
    done();
  });

  it("should_success_when_everything_is_valid", async () => {
    const res = await request.post("/users").send({
      name: "Codium",
      email: "my@email.com",
      password: "myPass_123123",
    });

    expect(res.statusCode).toEqual(StatusCodes.CREATED);
  });

  it("should_return_a_user_with_the_email_when_everything_is_valid", async () => {
    const res = await request.post("/users").send({
      name: "Codium",
      email: "my@email.com",
      password: "myPass_123123",
    });

    expect(res.body.user.email).toEqual("my@email.com");
  });

  it("should_returns_a_user_with_the_name_when_everything_is_valid", async () => {
    const res = await request.post("/users").send({
      name: "Codium",
      email: "my@email.com",
      password: "myPass_123123",
    });

    expect(res.body.user.name).toEqual("Codium");
  });  
});
