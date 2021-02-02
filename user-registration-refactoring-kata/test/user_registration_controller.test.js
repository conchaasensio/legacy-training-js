const app = require("../src/server"); // Link to your server file
const supertest = require("supertest");
const request = supertest(app);
let UserRegistration = require("../src/user_registration_controller");

describe("UserRegistrationController", () => {
  xit("change_this_name", () => {
    const userRegistrationController = new UserRegistrationController();

    expect(true).toBe(true);
  });

  it("gets the test endpoint", async done => {
    const response = await request.get("/test");
  
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("pass!");
    done();
  });

  it('should_success_when_everything_is_valid', async () => {
    const res = await request
      .post('/users')
      .send({
        name: 'Codium',
        email: 'my@email.com',
        password: 'myPass_123123',
      })

    expect(res.statusCode).toEqual(201)
    expect(res.body).toHaveProperty('user')
    expect(res.body.user).toEqual({"email": "my@email.com", "name": "Codium"})
  })  
});
