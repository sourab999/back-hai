const mongoose=require('mongoose')
const taskSchema=mongoose.Schema(
    {
    name:{
            type:String,
            required:[true,"please add a task"]
        },
  completed:{
            type:Boolean,
           required:true,
             default:false,

        },
    },
{
timestamps:true

}

    )

const Task=mongoose.model('task',taskSchema)
module.exports=Task;

// in put i required all the fields

// in patch i required only the completed fields



