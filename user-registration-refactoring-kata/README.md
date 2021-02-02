# User Registration kata

## Goal
Create the functionality using Unit tests and test doubles.

## Requirements
First iteration requirements:
- The input of the method has an email and a password.
- Validate that the user is persisted.
- The userId is randomly generated.

Second iteration requirements:
- Cannot exist two users with the same email.
- Password should meet security requirements.
  - Has more than 8 characters.
  - Contains an underscore.
- Sends the confirmation email when user is registered

## Remember
- Write a failing test.
- Write the minimum amount of code to make it pass.
- Do not forget to refactor the code.

## Tools
[Jest](https://jestjs.io/docs/en/mock-functions). Mocking library. 

### Example of Spy	

    it('should send an email', () => {
        const emailSender = new EmailSender();
        jest.spyOn(emailSender, 'send').mockName('send');
        const userRegistration = new UserRegistration(emailSender);

        userRegistration.register('an@email.com', 'validPassword');

        expect(emailSender.send).toHaveBeenCalled();
    });

Other useful validations:
- `expect(callback).toHaveBeenCalled()` check called ignoring arguments
- `expect(callback).not.toHaveBeenCalled()` check it was not called
- `expect(callback).toHaveBeenCalledTimes(3)` check it was called 3 times
- `expect(callback).toHaveBeenCalledWith(....)` check it was called with certain parameters
### Example of Stub    
    it('should success when password is valid', () => {
        const passwordValidator = new PasswordValidator();
        passwordValidator.isValid = jest.fn().mockReturnValue(true);
        let userRegistration = new UserRegistration(passwordValidator);
    
        const success = userRegistration
     .register('an@email.com', 'validPassword');
    
        expect(success).toBe(true);
    });

## How to test it manually
1. Run `make server` or `make docker-server`
2. From a terminal: `curl -d '{"name":"Codium", "email":"my@email.com", "password":"myPass_123123"}' -H "Content-Type: application/json" -X POST http://localhost:3000/users -v`
3. You should get a succesful response with a 201 status code and the user being returned.

## Authors
Luis Rovirosa [@luisrovirosa](https://www.twitter.com/luisrovirosa)

Jordi Anguela [@jordianguela](https://www.twitter.com/jordianguela)