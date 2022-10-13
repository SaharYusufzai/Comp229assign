const express = require('express')

const router = express.Router();


router.get('/', (req, res, next) => {
    res.render('index')
})
router.get('/about', (req, res, next) => {
    res.render('aboutme')
})
router.get('/contact', (req, res, next) => {
    res.render('contact')
})
router.get('/projects', (req, res, next) => {
    res.render('projects')
})
router.get('/services', (req, res, next) => {
    res.render('services')
})

router.get('/login', (req, res, next) => {
    res.render('signIn')
})
router.get('/contactList', (req, res, next) => {
    res.render('contactList')
})

module.exports = router