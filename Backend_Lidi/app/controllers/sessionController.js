const jwt = require('jsonwebtoken');

module.exports = (req, res) => {
    data = req.body
    const segredo = 'admin@lidi.com'
    const user = data.user
    const token = jwt.sign({
        user
    }, segredo, {
        expiresIn: '24h'
    })
    res.json({
        status: 200,
        token: 'token'
    })
}
