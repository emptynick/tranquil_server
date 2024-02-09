
const express = require('express')
const app = express()
var cors = require('cors')
const port = 8056

app.use(cors())

app.get('/', (req, res) => {
    res.send('Tranquil')
})

app.get("/playlists", (req, res) => {
    res.json([]);
});

app.get("/patterns", (req, res) => {
    res.json([{
        uuid: 'test',
        name: 'Test Pattern',
        date: '2024-15-12T12:00:00Z',
        popularity: 0.5,
        creator: 'Me'
    }]);
});

app.get("/playlists/:uuid", async (req, res) => {

});

app.get("/patterns/:uuid", async (req, res) => {

});

app.get("/patterns/:uuid/data", async (req, res) => {

});

app.get("/patterns/:uuid/thumb.png", async (req, res) => {

});

app.post("/playlists", async (req, res) => {
    res.json([]);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

