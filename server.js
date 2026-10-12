//console.log('May node be with you')
/*
Create (post) make something

Read(get) get soemthing

Uupdate(put) change something

Delete (delete) remove something


*/

require('dotenv').config()

const express = require('express')
const app = express()
const { MongoClient } = require('mongodb')

// EJS setup
app.set('view engine', 'ejs')

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

// MongoDB connection
const connectionString = process.env.mongodblink
const client = new MongoClient(connectionString)

client.connect()
    .then(() => {
        console.log('Connected to Database')

        const db = client.db('star-war-quotes')
        const quotesCollection = db.collection('quotes')

        // GET - Retrieve quotes and render EJS
        app.get('/', (req, res) => {
            quotesCollection
                .find()
                .toArray()
                .then(results => {
                    console.log('Quotes from MongoDB:', results)
                    res.render('index.ejs', { quotes: results })
                })
                .catch(error => {
                    console.error(error)
                    res.status(500).send('Error retrieving quotes')
                })
        })

        // POST - Save quotes to MongoDB
        app.post('/quotes', (req, res) => {
            console.log(req.body)

            quotesCollection.insertOne(req.body)
                .then(result => {
                    console.log('Saved to MongoDB:', result)
                    res.redirect('/')
                })
                .catch(error => {
                    console.error(error)
                    res.status(500).send('Error saving quote')
                })
        })
        // PUT - Replace Yoda's quote with Darth Vader's quote
        app.put('/quotes', (req, res) => {
            quotesCollection
                .findOneAndUpdate(
                    { name: 'Yoda' },
                    {
                        $set: {
                            name: req.body.name,
                            quote: req.body.quote
                        }
                    },
                    {
                        upsert: true
                    }
                )
                .then(result => {
                    console.log('Updated quote:', result)
                    res.json({ message: 'Quote updated successfully!' })
                })
                .catch(error => {
                    console.error(error)
                    res.status(500).json({ error: 'Error updating quote' })
                })
        })
        // DELETE - Remove one Darth Vader quote
        app.delete('/quotes', (req, res) => {
    console.log('DELETE request received:', req.body)

    quotesCollection
        .deleteOne({ name: req.body.name })
        .then(result => {
            console.log('MongoDB delete result:', result)

            if (result.deletedCount === 0) {
                return res.json('No quote to delete')
            }

            res.json("Deleted Darth Vader's quote")
        })
        .catch(error => {
            console.error(error)
            res.status(500).json({ error: 'Error deleting quote' })
        })
})
              

        app.listen(3000, () => {
            console.log('Listening on 3000')
        })
    })
    .catch(error => console.error(error))