const express = require('express')
const router = express.Router()

router.post('/login', (req, res) => {
    res.json({ message: "Hello I am here" })
})

module.exports = router