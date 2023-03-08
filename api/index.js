import express from 'express'
import mysql, { createConnection } from 'mysql'

const app = express()

app.get('/', (req, res) => {
    res.json("Connected")
})

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: 'Thepreacher@1',
    database: 'test'
});



app.get('/books', (req, res) => {
    const q = "SELECT * FROM books"
    db.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.listen(8800, ()=>{
    console.log('Connected to backend')
})