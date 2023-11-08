const mongoose = require('mongoose');
async function db(){

mongoose.connect('mongodb+srv://ok:ok@cluster0.6xetxyu.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('Error connecting to MongoDB:', err);
}); 
}
exports.db1=db;
