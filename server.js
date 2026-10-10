//console.log('May node be with you')
/*
Create (post) make something

Read(get) get soemthing

Uupdate(put) change something

Delete (delete) remove something




*/
const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient

//middleware express to gain fucntionality 
app.use(express.urlencoded({ extended: true}))

MongoClient.connect('mongodb-connection-string', (err, client) => {
    
})
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/quotes', (req, res) => {
    //console.log('Hellooooooooooooooooo!')
    console.log(req.body)
})

app.listen(3000, function () {
    console.log('Listening on 3000')
})