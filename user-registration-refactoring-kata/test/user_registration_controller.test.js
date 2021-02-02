const app = require("../src/server"); // Link to your server file
const { StatusCodes } = require("http-status-codes");
const supertest = require("supertest");
const request = supertest(app);

const USER_NAME = "Codium";
const USER_EMAIL = "my@email.com";
const VALID_PASSWORD = "myPass_123123";

describe("UserRegistrationController", () => {
  it("gets the test endpoint", async (done) => {
    const response = await request.get("/test");

    expect(response.status).toBe(StatusCodes.OK);
    expect(response.body.message).toBe("pass!");
    done();
  });


  it("should_success_when_everything_is_valid", async () => {
    const res = await request.post("/users").send({
      name: USER_NAME,
      email: USER_EMAIL,
      password: VALID_PASSWORD,
    });

    expect(res.statusCode).toEqual(StatusCodes.CREATED);
  });

  it("should_return_a_user_with_the_email_when_everything_is_valid", async () => {
    const res = await request.post("/users").send({
      name: USER_NAME,
      email: USER_EMAIL,
      password: VALID_PASSWORD,
    });

    expect(res.body.user.email).toEqual(USER_EMAIL);
  });

  it("should_returns_a_user_with_the_name_when_everything_is_valid", async () => {
    const res = await request.post("/users").send({
      name: USER_NAME,
      email: USER_EMAIL,
      password: VALID_PASSWORD,
    });

    expect(res.body.user).toHaveProperty("name", USER_NAME);
  });

  it("should_fail_when_password_is_short", async () => {
    const res = await request.post("/users").send({
      name: USER_NAME,
      email: USER_EMAIL,
      password: "myPass_",
    });

    expect(res.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res.body).toBe("The password is not valid!");
  });
});
