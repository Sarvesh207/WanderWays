
const initData = require('./data.js');
const Listing = require('../models/listing.js');

const mongoose = require('mongoose');
const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderways'

main()
.then(() => {console.log("connected to db")})
.catch((err) => {console.log(err)})

async function main(){
    await mongoose.connect(MONGO_URL);
    console.log('connected to database');

}

const initDB = async () => {
    await Listing.deleteMany({});
    console.log("data was deleted")
    await Listing.insertMany(initData.data);
    console.log("data was initilized")
}

initDB();

module.exports = main;


