const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://m001-student:Ibtisam@sandbox.xuwkkn8.mongodb.net/Portfolio?retryWrites=true&w=majority').then(() => {
    console.log('Database Connection successful');
}).catch(err => {
    console.log(err)
})