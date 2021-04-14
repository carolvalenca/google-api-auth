const express = require('express')
const routes = express.Router()

const auth = require('./services/auth')

routes.post('/login', auth, async (req, res) => {
    console.log(req.user)

    res.send('ok')
})

module.exports = routes