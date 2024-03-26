//TEST BUG #1


describe("post /register", function () {
    const newUser = {
        username: 'John',
        password: 'password',
        first_name: 'John',
        last_name: 'Doe',
        email: 'johndoe@gmail.com',
        phone: 1234567
    }

    test("registration OK", async function() {
        const resp = await request(app)
            .post('auth/register')
            .send(newUser);
            expect(resp.statusCode).toBe(201);
            expect(resp.body)
            
    })

})