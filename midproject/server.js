const express = require('express')
const mongoose = require('mongoose')
const Article = require('../midproject/src/model/Article')

// Create server to serve index.html
const app = express()
const http = require('http').Server(app)
const port = process.env.PORT || 3001

// Routing
app.use(express.static('src/App.js'))

// Socket.io serverSocket
const serverSocket = require('socket.io')(http)

// Start server listening process.
http.listen(port, () => {
    console.log(`Server listening on port ${port}.`)
})

app.get('/hello', (req, res, next) => {
    res.send({ express: 'Hello' });
})

// Connect to mongo
mongoose.connect('mongodb+srv://Peter:r980213r@cluster1-clsel.gcp.mongodb.net/test?retryWrites=true', {
    useNewUrlParser: true
})
db = mongoose.connection

db.on('error', error => {
    console.log(error)
})
db.once('open', () => {
    console.log('MongoDB connected!')
    serverSocket.on('connection', socket => {
        console.log('This is server.')

        socket.on('get_article', req => {
            console.log(req)
            Article.find().limit(100).sort({ _id: 1 }).exec((err, res) => {
                if(err)
                    throw Err(err)
                socket.emit('get_back', res)
                console.log(res)
            })
        })
        
        socket.on('new_post', data => {
            let title = data.title
            let time = data.time
            let author = data.author
            let content = data.content
            let img_source = data.img_source;

            // Check for name and message
            if (title === '' || time === '' || author === '' || content === '' || img_source === '') {
                console.error('Please enter complete information.')
            }
            else {
                // Insert message
                const post_article = new Article({ title, time, author, content, img_source })
                post_article.save(err => {
                    if(err)
                        console.error(err)
                    serverSocket.emit('post_back', [data])
                })
            }
        })

        socket.on('init', data => {
            console.log(data)
            socket.emit('init', 'Success Connect Server.')
        })
    })
})

