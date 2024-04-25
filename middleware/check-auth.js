const e = require('express');
const jwt = require('jsonwebtoken');

function checkAuth(req, res, next){
    try{
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.userData = decoded;
        next();
    }catch(error){
        return res.status(401).json({
            message: 'Invalid or expired token',
            error: error
        });
    }
}

module.exports={
    checkAuth: checkAuth
}