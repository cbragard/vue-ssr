const Util = require('../../util')

const connection = (sockets, pending, socket, db) => {
    const { email, id } = socket.handshake.session
    Util.log(`event [open]: ${email || ''} id=${id} `)
    if (email && sockets[email]) {
        sockets[email] = socket
        socket.removeAllListeners()
        require('../events')(db, socket, email)
    } else {
        pending[id] = socket
        socket.emit(401)
    }

    socket.on('logout', () => {
        require('./logout')(sockets, pending, socket)
    })

    socket.on('login', (data) => {
        require('./login')(sockets, pending, socket, db, data)
    })

    socket.on('register', (data) => {
        require('./register')(sockets, pending, socket, db, data)
    })
}

module.exports = connection
