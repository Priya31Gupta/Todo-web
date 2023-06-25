const express = require("express");
const cors = require('cors');
const connect = require("../configs/db.js");
var router = express.Router();
 
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

const TaskController = require('./Controller/todo_list.controller');

app.use('/tasks',TaskController);

app.listen(process.env.PORT||4000,async ()=>{
    let data= await  connect();
      console.log("listening on port 2100", process.env.PORT)
})
