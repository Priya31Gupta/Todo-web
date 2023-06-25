const express = require("express");
const router = express.Router();
const {body,validationResult} = require("express-validator");

const Task = require('../models/todo.model');

// Get operation

router.get('/', async(req,res) => {
    const page = Number(req.query.page) || 1;
    const count = Number(req.query.count) || 4;
    const offset = (page - 1) * 5;

    const task = await Task.find().skip(offset).limit(count).lean().exec();
    const totalTaskCount = await Task.find().count();
    const total_pages = Math.ceil(totalTaskCount/count);
    res.send({task, total_pages});
})

// Get by Id
router.get('/:id', async(req,res) => {
    const task = await Task.findById(req.params.id).lean().exec();

    res.send({task});
})

// Filter operation
router.get('/filter/:title', async(req,res) => {
    const task = await Task.find({title: req.params.title}).lean().exec();

    res.send({task});
})

// Post operation

router.post('/',
body('title').notEmpty().withMessage('Title is required'),
body('description').notEmpty().withMessage('Description is Required'),
body('priority').notEmpty().withMessage('Priority is required'),
body('status').notEmpty().withMessage('Status is required'), async(req,res) => {
    //validation
    const error = validationResult(req);
    let final_error = null;
    if(!error.isEmpty()){
        final_error=error.array().map(errors=>{
            return {
                param:errors.param,
                msg:errors.msg,
                value:errors.value
            }
        })
        return res.status(400).json({error:final_error});
    }
    const tasks = await Task.create(req.body);
    res.send(tasks);
})

// Patch operation

router.patch('/:id', async(req,res) => {
    try{
        const task = await Task.findByIdAndUpdate(req.params.id, req.body,{new: true}).lean().exec();
        res.send(task);
    }catch{
        res.send('Something went wrong, Please Check your data and Try again!');
    }
})

// Delete operation

router.delete('/:id',async(req,res)=>{
    const task = await Task.findByIdAndDelete(req.params.id);
    res.send(task);
})

module.exports = router;
