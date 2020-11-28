const Util = require('../../util')

const logout = (sockets, pending, socket) => {
    const { email, id } = socket.handshake.session
    Util.log(`event [logout]: ${email}`)
    socket.handshake.session.email = null
    socket.handshake.session.save()
    delete sockets[email]
    pending[id] = socket
    socket.emit(401)
}

module.exports = logout
