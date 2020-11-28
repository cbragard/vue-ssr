const Util = require('../../util')

const register = async(sockets, pending, socket, db, data) => {
    const { email, password } = data
    Util.log(`event [register]: ${email}`)
    if(!email || !password) {
        socket.emit(400, { error: 'missing-data' })
    } else {
        const player = await db.collection('user').findOne({ email })
        if (player) {
            socket.emit(400, { error: 'email-already-exists' })
        } else {
            const hash = await bcrypt.hash(password, 10)
            db.collection('user').insertOne({
                email,
                password: hash
            }, () => {
                socket.emit(401)
            })
        }
    }
}

module.exports = register
