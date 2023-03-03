const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const shema=new mongoose.Schema({
    Comment:String,
    blog_id:{type:mongoose.Schema.Types.ObjectId,ref:'Blog'},
    user_id:{type:mongoose.Schema.Types.ObjectId,ref:'User'}
},{
    timestamps:true,
})
const BlogComment=mongoose.model('BlogComment',mongoose.Schema)
module.exports=BlogComment