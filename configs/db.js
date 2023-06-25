const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
const connect =  ()=>{
    return mongoose.connect("mongodb+srv://priyakumarigupta790:3OSTT24xaKZc4I9p@todoapp.yfmarby.mongodb.net/?retryWrites=true&w=majority");
}
module.exports = connect;
