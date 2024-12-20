import mongoose from "mongoose";
const PostSchema=new mongoose.Schema({
    name:{type:String,requried:true,},
   prompt:{type:String,requried:true,},
    photo:{type:String,requried:true,},
});
const  Post = mongoose.model("Post",PostSchema);
export default Post;