const mongoose = require('mongoose')

const fruitSchema = mongoose.Schema({
    no:{
        type: String,
        required: true,
        maxlength: 30
    },
    name:{
        type: String,
        required: true,
        maxlength: 30
    },
    type:{
        type: String,
        required: true
    },
    date:{
        type: String,
        default: Date.now,
        required: true
    },
    time:{
        type: String,
        required: true
    },
    file: {
        type: String,
        required: true
    },
    access1:{
        type: String,
        required: true
    },
    access2:{
        type: String,
        required: true
    },
    access3:{
        type: String,
        required: true
    },
    access4:{
        type: String,
        required: true
    },
    access5:{
        type: String,
        required: true
    },
    addedBy:{
        type: String,
        default: "สมสุข ลิ้มอิ่ม"
    },
});

module.exports = mongoose.model('Fruit', fruitSchema)