//console.log('May node be with you')
/*
Create (post) make something

Read(get) get soemthing

Uupdate(put) change something

Delete (delete) remove something




*/
const express = require('express')
const app = express() 


app.listen(3000, function () {
    console.log('Listening on 3000')
})

app.get( '/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/quotes', (req, res) => {
    console.log("Helloooooooo it is I!")
})