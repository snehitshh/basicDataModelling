import mongoose from "mongoose"

const todoSchema=new mongoose.Schema({
  content:{
    type:String,
    required:true,
  },
  complete:{
    type:Boolean,
    default:false
  },
  createdBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
  },
  subTodos:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'subToDo'
  }]  //array of subToDo
},{timestamps:true});

export const todo=mongoose.model('todo',todoSchema);