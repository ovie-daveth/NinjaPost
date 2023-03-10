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
    database: 'ninja'
});


// //.get = posting to database or server or frontend
// //.post = getting froom server or database or frontend

app.get('/api/insert', (req, res) => {
    const q = "INSERT INTO users (id, fullname, username, email, password) VALUES (1, 'Omokefe Ovie', 'davet', 'oviedavid77@gmail.com', 'Thepreacher1');"

    db.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})



app.listen(8800, ()=>{
    console.log('Connected to backend')
})