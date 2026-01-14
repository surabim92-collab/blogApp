// import model 
const Post =require ("../models/postModel");
const Like = require("../models/likeModel");

// bussiness logic
exports.likePost= async(req,res)=>{
    try{
         // fetch data from req body
         const {post,user}=req.body;

         // create a like object
         const like =new Like({
            post,user
         });

         // save the new like into the database
         const savedLike=await like.save();
       
         //find the post by Id , add the new like to its likes array
         const updatedPost =await Post.findByIdAndUpdate(post,{$push:{likes: savedLike._id}}, {new:true}) // push inserts the new like id in the likes array

                           .populate("likes")
                           .populate("comments") //populate the likes array with comment documents
                            .exec();
        res.json({
            post :updatedPost,
        });

    }
   catch(error){
       return res.status(500).json({
           error:"Error While likeing post",
       })
   }
}

exports.unlikePost= async(req,res)=>{
    try{
         // fetch data from req body
         const {post,like}=req.body;

    
       
         //find the post by Id , delete the new like from its  likes array
         const deletedLike =await Like.findOneAndDelete({post:post, _id:like}) ;

         //update the post collection
         const updatedPost =await Post.findByIdAndUpdate(post,{$pull: {likes: deletedLike._id}},{new:true})

                           .populate("likes")
                           .populate("comments") //populate the likes array with likes  documents
                            .exec();
        res.json({
            post :updatedPost,
        });

    }
   catch(error){
       return res.status(500).json({
           error:"Error While unlikeing post",
       })
   }
}


