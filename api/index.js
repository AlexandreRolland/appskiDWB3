const express = require('express');
const app = express();
const port = 8000
const postRouter = require('./src/routers/post.router')
const bookingRouter = require('./src/routers/booking.router')
const commentRouter = require('./src/routers/comment.router')
const shopRouter = require('./src/routers/shop.router')
const mongoConnect = require('./config/mongo.connect')
mongoConnect()
const cors= require('cors')

const PREFIX_URL= "/api"

app.get('/', (req, res) => {
    console.log(req.body)
    res.send('Hello Wordl')
})

app.use(express.json())

app.use(cors())

app.use(PREFIX_URL, postRouter)

app.use(PREFIX_URL, bookingRouter)

app.use(PREFIX_URL, commentRouter)

app.use(PREFIX_URL, shopRouter)

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})



