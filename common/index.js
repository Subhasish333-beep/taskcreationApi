var jwt = require('jsonwebtoken');

function checkLogin(req, res, next) {
    var secret_key = 'shhhhh';
    //check header
    let authHeader = req.header('Authorization');
    //verify token
    jwt.verify(authHeader, secret_key, function (err, decoded) {
        if (err) {
            res.status(400).json({ message: 'Invalid user' })
        }
        else {
            req.body.userData = decoded;
            next();
        }
    })
}

module.exports = {
    checkLogin
}