
const { User } = require("../models");

    const req = {
        body: {
            email: 'test@test.com',
            password: 'test'
            }
    }

    const email = req.body.email
    const password = req.body.password

    let row =  User.findOne({ where: { email: email } })
    .then(row=>{

        if (row) {
            row = row.get({plain: true})
            console.log(row)
       
        }
    })
    
    