const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.static(__dirname + '/src'));

app.get('/', (req, res) => {
	res.sendFile(__dirname + 'index.html');
});

app.listen(PORT, () => {
	console.log(`Listen : ${PORT}`);
});
