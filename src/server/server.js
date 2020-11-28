const fs = require('fs')
const express = require('express')
const session = require('express-session')
const fileStore = require('session-file-store')(session)
const sharedsession = require("express-socket.io-session")
const mongo = require('mongodb').MongoClient
const mongourl = 'mongodb://mongo:27017'
const mongodb = 'vue-ssr'
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const Util = require('./util')

const sessionMiddleware = session({
    store: new fileStore({ path: '/tmp/' }),
    cookie: { maxAge: 24 * 60 * 60 * 1000 },
    secret: 'vue-ssr',
    resave: true,
    saveUninitialized: true
})

app.use(express.static('build'))
app.use(express.json())
app.use(express.urlencoded())
app.use(sessionMiddleware)
io.use(sharedsession(sessionMiddleware))

mongo.connect(mongourl, async(err, client) => {
    if(err) {
        Util.log(`mongoDB error ${err.toString()}`)
        client.close()
    } else {
        const db = client.db(mongodb)
        fs.readFile('/app/build/manifest.json', { encoding: 'utf-8' }, (err, data) => {
            const js = JSON.parse(data)['client.js']
            Util.log(`JS file ${js}`)
            app.use((req, res) => {
                res.status(200).send(`
                    <!doctype html>
                    <html>
                        <head>
                            <title>
                                - VUE-SSR -
                            </title>
                        </head>
                        <body>
                            <div id="app"></div>
                            <script src="${process.env.NODE_HOST}/${js}"></script>
                        </body>
                    </html>
                `)
            })
            require('./socket/socket')(db, io)
            server.listen(80)
        })
    }
})
