const Util = require('../util')

module.exports = (db, io) => {
    const sockets = {}
    const pending = {}

    io.on('disconnect', (socket) => {
        require('./event/disconnect')(sockets, pending, socket)
    })

    io.on('connection', (socket) => {
        require('./event/connection')(sockets, pending, socket, db)
        Util.log(`pending[${Object.entries(pending).length}] sockets[${Object.entries(sockets).length}]`)
    })
}
