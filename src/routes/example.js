const express = require("express");
//Router-level middleware
const router = express.Router();

router.get('/', (req, res) => {
    res.send("<h1>Hello Adamo!!!</h1>")
})

router.post('/adamo', (req, res) => {
    res.send("This is post method!")
})

router.put('/adamo/:id', (req, res) => {
    res.send("This is put method!")
})

router.delete('/adamo/:id', (req, res) => {
    res.send("This is delete method")
})

router.get('/adamo/:name', (req, res) => {
    res.send('User name có tên: ' + req.params.name)
})

module.exports = router;