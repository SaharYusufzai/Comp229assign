// Modules required for project
const express = require('express')
const routes = require('../routes/routes')
const path = require('path')
const authRoutes = require('../routes/auth')
const { application } = require('express')

const PORT = process.env.PORT || 3000

// Path to static file that include images and other css stuff 
const staticPath = path.join(__dirname, '../public')

// express application initialization 
const app = express()

// View Engine setup 
app.set('view engine', 'ejs')
// Routes 
app.use('/', routes)
app.use('/api', authRoutes)

// Database Connection
require('../database/connection')

// Static Path Inclusion 
app.use(express.static(staticPath))

// Server Start 
app.listen(PORT, () => {
    console.log('Server Started at PORT 3000');
})