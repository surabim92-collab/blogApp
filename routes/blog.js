const express =require("express");
const router =express.Router();




//import controller
const {createComment}=require("../controllers/CommentController");
const {createPost,getAllPosts}=require("../controllers/Postcontroller");
const {likePost,unlikePost}=require("../controllers/LikeController");
// const {deleteTodo}=require("../controller/deleteTodo");

// mapping of routes with controller

router.post("/comments/create",createComment);
router.post("/post/create",createPost);
router.get("/posts",getAllPosts);
router.post("/like/post",likePost);
 router.post("/unlike/post",unlikePost);

// export
module.exports=router;





