

const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Hello from week one assignment</h1>");
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

