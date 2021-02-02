const app = require("../src/server"); // Link to your server file
const UserOrmRepository = require("../src/user_orm_repository");
const { StatusCodes } = require("http-status-codes");
const supertest = require("supertest");
const request = supertest(app);

const USER_NAME = "Codium";
const USER_EMAIL = "my@email.com";
const VALID_PASSWORD = "myPass_123123";

describe("UserRegistrationController", () => {
  beforeEach(function () {
    UserOrmRepository.flush();
  });

  xit("gets the test endpoint", async (done) => {
    const response = await request.get("/test");

    expect(response.status).toBe(StatusCodes.OK);
    expect(response.body.message).toBe("pass!");
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

  it("should_fail_when_password_does_not_contain_underscore", async () => {
    const res = await request.post("/users").send({
      name: USER_NAME,
      email: USER_EMAIL,
      password: "myPass123123",
    });

    expect(res.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res.body).toBe("The password is not valid!");
  });

  it("should_fail_when_email_is_used", async () => {
    await request.post("/users").send({
      name: USER_NAME,
      email: USER_EMAIL,
      password: VALID_PASSWORD,
    });

    const res = await request.post("/users").send({
      name: USER_NAME,
      email: USER_EMAIL,
      password: VALID_PASSWORD,
    });

    expect(res.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res.body).toBe("The email is already in use");
  });

  xit("should_generate_a_random_id_when_everything_is_valid", async () => {
    const res = await request.post("/users").send({
      name: USER_NAME,
      email: USER_EMAIL,
      password: VALID_PASSWORD,
    });

    expect(res.body.user).toHaveProperty("id");
    expect(res.body.user.id).not.toEqual(1);
  });

  xit("should_persist_the_user", async () => {
    //TODO
  });
});
