const express = require('express');
const app = express();
const Listing = require('./models/listing');



const mongoose = require('mongoose');
const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderways'

main()
.then(() => {console.log("connected to db")})
.catch((err) => {console.log(err)})

async function main(){
    await mongoose.connect(MONGO_URL);
    console.log('connected to database');

}


app.get('/', (req, res) => res.send('Hello World!'))

app.get("/testListing", async (req, res) => {
    let smapleListing  = new Listing({
        title:"My New Villa",
        description:"By the Beach",
        price:1200,
        location:"Calangute, Goa",
        country:"India",

    });
   await smapleListing.save();
   console.log("Sample was Save");

   res.send("Sample was  succeuufully");
})
app.listen(3000, () => console.log('listening on port 3000'))
