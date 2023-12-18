const express = require('express');
const app = express();
const mongoose = require('mongoose');
const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderways'

async function main(){
    await mongoose.connect(MONGO_URL);
    console.log('connected to database');

}

main()
.then(() => {console.log("connected to database")})
.catch((err) => {console.log(err)})
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(3000, () => console.log('listening on port 3000'))
