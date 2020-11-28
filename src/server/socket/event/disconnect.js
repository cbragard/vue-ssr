const Util = require('../../util')

const disconnect = (sockets, pending, socket) => {
    socket.removeAllListeners()
    const { email, id } = socket.handshake.session
    Util.log(`socket lost ${id} ${email || ''}}`)
}

module.exports = disconnect
