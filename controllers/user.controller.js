const models = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

function signUp(req, res){

    models.User.findOne({
        where:{
            email: req.body.email
        }
    }).then(result => {
        if(result){
            res.status(409).json({
                message: 'Email already exists'
            });
        }else{
            bcrypt.genSalt(10, function(err, salt){
                bcrypt.hash(req.body.password,salt,function(err,hash){
                    const user = {
                        name: req.body.name,
                        email: req.body.email,
                        password: hash
                    }
                
                    models.User.create(user).then(result =>{
                        res.status(201).json({
                            message: 'User created successfully',
                            user: result
                        });
                    }).catch(error=>{
                        res.status(500).json({
                            message: 'Something went wrong',
                            error: error
                        });
                    });
                });
            });
        }
    }).catch(error => {
        res.status(500).json({
            message: 'Something went wrong',
            error: error
        });
    });
}

module.exports = {
    signUp: signUp
}