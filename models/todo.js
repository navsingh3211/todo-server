import mongoose from 'mongoose';
import { boolean } from 'zod';

const schema = new mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  isCompleted:{
    type:Boolean,
    required:false,
    default:false,
    index:true
  },
  status:{
    type:Boolean,
    default:true
  }
},
{
  timestamps:true
}
);

export default mongoose.model("toDo",schema);