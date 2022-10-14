const express = require('express')

const router = express.Router();

const auth = (req, res, next) => {
    if (!req.cookies.signed) {
        res.redirect('/login')
    }
    next()
}

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
router.get('/contactList', auth, (req, res, next) => {
    res.render('contactList')
})
router.get('/add', auth, (req, res, next) => {
    res.render('addUser')
})
router.get('/update', auth, (req, res, next) => {
    res.render('updateUser')
})
router.get('/logout', (req, res) => {
    res.clearCookie('signed');
    res.redirect('/login')
})

module.exports = router