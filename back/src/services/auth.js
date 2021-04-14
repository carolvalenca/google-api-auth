const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client("495513255686-vn7jceiedd88s2om7b7652347q5tj0tn.apps.googleusercontent.com")

const googleAuth = async (req, res, next) => {
    const ticket = await client.verifyIdToken({
        idToken: req.body.token,
        audience: "495513255686-vn7jceiedd88s2om7b7652347q5tj0tn.apps.googleusercontent.com"
    })
    const payload = ticket.getPayload()

    console.log(`User ${payload.name} verified`)
    
    // payload: {
    //     iss: 'accounts.google.com',
    //     azp: '495513255686-vn7jceiedd88s2om7b7652347q5tj0tn.apps.googleusercontent.com',
    //     aud: '495513255686-vn7jceiedd88s2om7b7652347q5tj0tn.apps.googleusercontent.com',
    //     sub: '102243349331909362001',
    //     email: 'carou.leandro@gmail.com',
    //     email_verified: true,
    //     at_hash: 'CTCqVdZo5X-6Fm78xbyNXw',
    //     name: 'Caroliny Valença',
    //     picture: 'https://lh4.googleusercontent.com/-KujGQRynO40/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckvF2OsQ5BunSg3ypUQeSxhg6KeNA/s96-c/photo.jpg',
    //     given_name: 'Caroliny',
    //     family_name: 'Valença',
    //     locale: 'pt-BR',
    //     iat: 1618416907,
    //     exp: 1618420507,
    //     jti: '3c446c4dd761190ecb4fb9aa227d51a09226a103'
    //   }

    req.user = payload
    next()
}

module.exports = googleAuth