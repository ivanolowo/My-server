const express = require('express');
const path = require('path');
const app = express();

//Sources https://www.youtube.com/watch?v=R7yTVsrTxwk
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './html_files', 'index.html'));
});

app.get('*', (req, res) => {
    res.send('THIS IS NOT THE HOME PAGE!')
});


app.listen(3000, () => {
    console.log("server is up at port 3000")
});