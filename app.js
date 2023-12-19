const express = require('express');
const app = express();
const Listing = require('./models/listing');
const mongoose = require('mongoose');
const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderways'
const path = require('path');
const methodOverride = require('method-override');


app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

main()
.then(() => {console.log("connected to db")})
.catch((err) => {console.log(err)})

async function main(){
    await mongoose.connect(MONGO_URL);
    console.log('connected to database');

}




// app.get('/', (req, res) => res.send('Hello World!'))

// app.get("/testListing", async (req, res) => {
//     let smapleListing  = new Listing({
//         title:"My New Villa",
//         description:"By the Beach",
//         price:1200,
//         location:"Calangute, Goa",
//         country:"India",

//     });

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Index route
app.get("/listings", async (req, res) => {
    const allListings =  await Listing.find({});

    res.render("listings/index.ejs", {allListings});
})

// New route
app.get("/listings/new", (req, res) => {
    res.render("listings/new.ejs");
})

//show route
app.get("/listings/:id", async (req, res) => {
    const {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", {listing});
})

// Create Route
app.post("/listings", async (req, res) => {
    
    const newListing = await new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
})

// Edit Route
app.get("/listings/:id/edit", async (req, res) => {
    const {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", {listing});
})

// Update Route
app.put("/listings/:id", async (req, res) => {
    const {id} = req.params;
    const listing = await Listing.findByIdAndUpdate(id, {...req.body.listing});
    res.redirect("/listings");

})






app.listen(3000, () => console.log('listening on port 3000'))
