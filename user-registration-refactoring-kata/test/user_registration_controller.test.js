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

  it('should register a new user', async () => {
    const res = await request
      .post('/users')
      .send({
        name: 'Pepito',
        email: 'pepito@gmail.com',
        password: 'thisismypassword',
      })
    expect(res.statusCode).toEqual(201)
    expect(res.body).toHaveProperty('user')
  })  
});
