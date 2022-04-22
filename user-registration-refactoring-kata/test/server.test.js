import server from '../src/server';
import supertest from 'supertest';
import userOrmRepository from '../src/user_orm_repository';
import { StatusCodes } from 'http-status-codes';

const USER_NAME = 'Codium';
const USER_EMAIL = 'my@email.com';
const VALID_PASSWORD = 'myPass_123123';

const request = supertest(server);

describe('User registration server', () => {
  beforeEach(function () {
    userOrmRepository.flush();
  });

  it('should_success_when_everything_is_valid', async () => {
    const res = await request.post('/users').send({
      name: USER_NAME,
      email: USER_EMAIL,
      password: VALID_PASSWORD,
    });

    expect(res.statusCode).toEqual(StatusCodes.CREATED);
  });

  it('should_return_a_user_with_the_email_when_everything_is_valid', async () => {
    const res = await request.post('/users').send({
      name: USER_NAME,
      email: USER_EMAIL,
      password: VALID_PASSWORD,
    });

    expect(res.body.user.email).toEqual(USER_EMAIL);
  });

  it('should_returns_a_user_with_the_name_when_everything_is_valid', async () => {
    const res = await request.post('/users').send({
      name: USER_NAME,
      email: USER_EMAIL,
      password: VALID_PASSWORD,
    });

    expect(res.body.user).toHaveProperty('name', USER_NAME);
  });

  it('should_fail_when_password_is_short', async () => {
    const res = await request.post('/users').send({
      name: USER_NAME,
      email: USER_EMAIL,
      password: 'myPass_',
    });

    expect(res.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res.body).toBe('The password is not valid!');
  });

  it('should_fail_when_password_does_not_contain_underscore', async () => {
    const res = await request.post('/users').send({
      name: USER_NAME,
      email: USER_EMAIL,
      password: 'myPass123123',
    });

    expect(res.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res.body).toBe('The password is not valid!');
  });

  it('should_fail_when_email_is_used', async () => {
    await request.post('/users').send({
      name: USER_NAME,
      email: USER_EMAIL,
      password: VALID_PASSWORD,
    });

    const res = await request.post('/users').send({
      name: USER_NAME,
      email: USER_EMAIL,
      password: VALID_PASSWORD,
    });

    expect(res.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res.body).toBe('The email is already in use');
  });

  it('should_generate_a_random_id_when_everything_is_valid', async () => {
    const res = await request.post('/users').send({
      name: USER_NAME,
      email: USER_EMAIL,
      password: VALID_PASSWORD,
    });

    expect(res.body.user).toHaveProperty('id');
    expect(res.body.user.id).not.toEqual(1);
  });

  it('should_persist_the_user', async () => {
    await request.post('/users').send({
      name: USER_NAME,
      email: USER_EMAIL,
      password: VALID_PASSWORD,
    });

    const user = userOrmRepository.findByEmail(USER_EMAIL);
    expect(user.id).not.toBe(undefined);
    expect(user).toHaveProperty('name', USER_NAME);
    expect(user).toHaveProperty('email', USER_EMAIL);
    expect(user).toHaveProperty('password', VALID_PASSWORD);
  });
});
