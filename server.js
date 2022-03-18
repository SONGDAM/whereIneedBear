const express = require('express');
const app = express();
const multer = require('multer');
const PORT = 4000;
const path = require('path');
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, new Date().valueOf() + path.extname(file.originalname));
    },
  }),
});

app.set('views', process.cwd() + '/views');

app.set('view engine', 'pug');

app.get('/admin', (req, res) => {
  res.render('admin');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/up', upload.array('img'), (req, res) => {
  console.log(req.files);
  res.send('<p class="up">successed!!</p>');
});

app.use(express.static(__dirname + '/src'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + 'index.html');
});

app.listen(PORT, () => {
  console.log(`Listen : ${PORT}`);
});
