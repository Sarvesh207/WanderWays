const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title:{
        type:String,
        required:true,  
    },
    
    description:String,
    image:{
        type:String,
        required:true,
        default:"https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsJTIwbmF0dXJlfGVufDB8fDB8fHww",
    },
    price:Number,
    location:String,
    country:String
})

const Listing = mongoose.model('Listing',listingSchema);
module.exports = Listing;