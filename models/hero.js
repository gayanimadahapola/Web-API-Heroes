const mongoose = require("mongoose");

const heroSchema = new mongoose.Schema({
    // name : String,
    // birthname : String,
    // likeCount : Number,
    // deceased : Boolean,
    // superPowers : [String], //we can have only one 
    // movies : [String]
    name: {
        type: String,
        required: true
    },
    birthname:{
        type: String,
        minlength: 3,
        maxlength: 20
    },
    likeCount:Number,
    deceased: { 
        type: Boolean,
        default: false,
    },
    superPower: {
        type: [String],
        enum: ["Barking" , "Flying" , "Invisibility"]
    },
    movies: [String]
});


const Hero = mongoose.model("Hero",heroSchema)

module.exports = Hero;