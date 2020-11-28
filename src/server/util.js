const moment = require('moment')
const ObjectID = require('mongodb').ObjectID

module.exports = class Util {

    static log(str) {
        const ts = moment(Date.now()).format('YYYY/MM/DD HH:mm:ss')
        console.log(`.ROM ${ts} : ${str}`)
    }
}
