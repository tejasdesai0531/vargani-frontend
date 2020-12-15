const express = require('express')

const path = require('path')

const app = express();

app.use(express.static(__dirname + '/dist/vargani-frontend'));

app.get('*', function(req, res) {

    res.sendFile(path.join(__dirname + '/dist/vargani-frontend/index.html'))

})

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Node Express server listening on http://localhost:${PORT}`);
});