import express from 'express'
import mysql, { createConnection } from 'mysql'

const app = express()
app.use(express.json())

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
    
})



app.listen(8800, ()=>{
    console.log('Connected to backend')
})