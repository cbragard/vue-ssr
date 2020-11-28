const os = require('os')
const bcrypt = require('bcrypt')

const Util = require('../../util')

const login = async(sockets, pending, socket, db, data) => {
    const { email = null, password = null } = data
    Util.log(`event [login]: ${email}`)
    if (!email || !password) {
        socket.emit(400, { error: 'invalid' })
    } else {
        const user = await db.collection('user').findOne({ email }) || {}
        const check = await bcrypt.compare(password, user.password)
        if (!user || !check) {
            socket.emit(400, { error: 'invalid' })
        } else {
            socket.handshake.session.email = email
            await socket.handshake.session.save()
            delete pending[socket.handshake.session.id]
            delete user.password
            sockets[email] = socket
            socket.removeAllListeners()
            require('../events')(db, socket, email)
        }
    }
}

module.exports = login
