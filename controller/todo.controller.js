import {createTodoVal,updateTodoVal} from '../types.util.js';
import toDoModel from '../models/todo.js';

export const toDo = async (req,res,next)=>{
  try{
    const createPayload = req.body;
    
    const parsePayload = createTodoVal.safeParse(createPayload);
    if(!parsePayload.success){
      return res.status(411).json({
        success:false,
        msg:'You have sent wrong inputs'
      })
    }

    //put data in mngodb 
    const insertDb = await toDoModel.create(createPayload);
    if(insertDb){
      return res.status(201).json({
        success:true,
        msg:'To-do created successfully.',
        data:null
      })
    }
  }catch(error){
    console.log(error);
  }
  
}

export const getTodoListing = async (req,res,next)=>{
  try{
    const toDoListing = await toDoModel.find({status:true});
    if(toDoListing){
      return res.status(201).json({
        success:true,
        msg:"No data found!",
        data:toDoListing
      })
    }
    return res.status(201).json({
      success:true,
      msg:'Data found!',
      data:toDoListing
    })
  }catch(error){
    console.log(error);
  }
  
}

export const complateTodo = async (req,res,next)=>{
  try{
    const body = req.body;
    // console.log(id,'id');
    const parseQueryId = updateTodoVal.safeParse(body);
    if(!parseQueryId.success){
      return res.status(411).json({
        success:false,
        msg:'You have sent wrong inputs'
      })
    }
    let taskDetails = await toDoModel.findOne({_id:body.id},{_id:1});
    if(!taskDetails){
      return res.status(411).json({
        success:false,
        msg:'No task found by given Id.',
        data:null
      })
    }
    let dataUpdated = await toDoModel.updateOne({_id:body.id},{
        $set:{
          isCompleted:true
        }
    })
    if(dataUpdated){
      return res.status(201).json({
        success:true,
        msg:'Task has completed successfully.',
        data:null
      })
    }
  }catch(error){
    console.log(error);
  }
  
}