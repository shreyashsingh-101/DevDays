const mongoose = require('mongoose');

const model = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please add name'],
        unique: true,
        trim: true,

    },
    email: String,
    phone: String,
    link: String,
    description: String,
    
})

module.exports = mongoose.model('DevDays', model);