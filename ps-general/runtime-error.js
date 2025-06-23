// const buffer = Buffer.from('Hello, Raviteja');

// console.log(buffer);          // <Buffer 48 65 6c 6c 6f ...>
// console.log(buffer.toString()); // "Hello, Raviteja"

// const fs = require('fs');

// fs.readFile('./two-Sum.js', 'utf8', (err, data) => {
//     if(err) throw err;
//     console.log(data)
// });

const express = require('express');
const multer = require('multer');

const app = express();

//configure storage
const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, './user.png')
    },
    filename:(req, file, cb ) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({storage:storage})

// Create an API to upload a file
app.post('/upload', upload.single('profile'), (req, res) => {
  res.send('File uploaded successfully!');
});

// Start server
app.listen(3000, () => console.log('Server running on port 3000'));













