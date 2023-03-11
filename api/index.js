import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
// const nodemailer = require('nodemailer');
// const crypto = require('crypto');
// const bodyParser = require('body-parser');

const app = express()
app.use(express.json())
app.use(cors())
// app.use(bodyParser.json());

// // Initialize nodemailer transporter
// const transporter = nodemailer.createTransport({
//     service: 'Gmail',
//     auth: {
//         user: 'davethsite@gmail.com',
//         pass: 'Thepreacher@1'
//     }
// });


// // Route for sending verification email
// app.post('/sendverifyemail', (req, res) => {
//     const email = req.body.email;

//     // Generate verification code
//     const code = crypto.randomBytes(16).toString('hex');

//     // Compose email message
//     const message = {
//         from: 'davethsite@gmail.com',
//         to: email,
//         subject: 'Verify your email address',
//         html: `Thank you for signing up! Your verification code is: <b>${code}</b>`
//     };

//     // Send email
//     transporter.sendMail(message, (error, info) => {
//         if (error) {
//             console.log(error);
//             res.status(500).send('Failed to send verification email');
//         } else {
//             console.log(`Email sent to ${email}: ${info.response}`);
//             res.status(200).send('Verification email sent');
//         }
//     });
// });

// // Route for verifying email with code
// app.post('/verify-email', (req, res) => {
//     const email = req.body.email;
//     const code = req.body.code;

//     // TODO: Check if email and code match a valid verification request

//     if (/* email and code are valid */) {
//         // TODO: Update database to mark email as verified
//         res.status(200).send('Email verified');
//     } else {
//         res.status(400).send('Invalid verification code');
//     }
// });

app.get('/', (req, res) => {
    res.json("Connected to backend")
})

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: 'Thepreacher@1',
    database: 'ninja'
});




app.post('/register', (req, res) => {
    const fullname = req.body.fullname;
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
  
    const userQuery = "SELECT * FROM users WHERE email = ? OR username = ?";
    db.query(userQuery, [email, username], (err, data) => {
      if (err) return res.send(err);
      if (data.length > 0) {
        // User already exists
        return res.status(400).send({ message: 'User already exists' });
      } else {
        // Create new user
        const newUserQuery = "INSERT INTO users (fullname, username, email, password) VALUES (?,?,?,?)";
        db.query(newUserQuery, [fullname, username, email, password], (err, data) => {
          if (err) return res.send(err);
          return res.send({ message: 'User created successfully' });
        });
      }
    });
  });
  

  app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
  
    const userQuery = "SELECT * FROM users WHERE username = ?";
    db.query(userQuery, [username], (err, data) => {
      if (err) return res.send(err);
      if (data.length === 0) {
        // User not found
        return res.status(401).send({ message: 'Incorrect username or password' });
      } else {
        // Check password
        const user = data[0];
        if (user.password === password) {
          // Password is correct, log in user
          return res.send({ message: 'Login successful' });
        } else {
          // Password is incorrect
          return res.status(401).send({ message: 'Incorrect username or password' });
        }
      }
    });
  });
  

app.listen(8800, ()=>{
    console.log('Connected to backend')
})