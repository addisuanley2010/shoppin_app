const jwt = require('jsonwebtoken')

const genAuthToken = (user) => {
    const secretKey = 'Adda2020';
    const token = jwt.sign({
        id:user.id,
        username: user.username,
        email: user.email,
    }, secretKey);
    return token;

};
module.exports = genAuthToken;