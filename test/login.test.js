beforeAll(async()=>{
    const { User } = require("../models");
    const req = {
        body: {
            email: 'test@test.com',
            password: 'test'
            }
    }

    const email = req.body.email
    const password = req.body.password

    let row = await User.findOne({ where: { email: email } })
    
    if (row) {
        row = row.get({plain: true})
        console.log(row)

        // TODO: Make it show that row of username, password etc
        // TODO: use checkPassword from the model
        // TODO: Refactor into a route
    }
})

describe ('login', () => {
    test('seeded login data', () => {


        expect(2+2).toBe(4)
    })
})