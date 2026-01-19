# Blog API – Node.js & MongoDB Backend

This is a backend-only Blog Application built with **Node.js**, **Express**, and **MongoDB**.  
It works as a local server that handles requests based on API paths and stores all data in MongoDB.

The API allows users to:

- Create blog posts
- Like and dislike posts
- Add comments on posts
- View posts with their likes, dislikes, and comments

All interactions are stored persistently in MongoDB.

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- dotenv for environment variables

---
🔗 API Features
Blog Operations
    Create a new blog post
    Fetch all posts
    Fetch a single post

Engagement
   Like a post
   Dislike a post
   Add comments to a post
   Each request is routed based on the API path, and all data (users, posts, likes, dislikes, comments) is stored in MongoDB.


#  How to Run the Project on Localhost**

## Environment Variables**

Create a `.env` file in the root directory and add:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

 The `.env` file is intentionally excluded from version control to protect sensitive information.

---

## *Start the Server**

### **Development Mode**
```bash
npx nodemon index.js
```

### **Production Mode**
```bash
node index.js
```

---

## * Access the Application**

Once the server is running, open your browser or API testing tool (Postman / Thunder Client) and visit:

```
http://localhost:3000
```

If the server is configured correctly, it will respond indicating that the API is running successfully.

---

## *Test API Endpoints**

Use an API client to test available endpoints such as:
- Create a blog post
- Like a post
- Comment on a post

## API Endpoints
("/comments/create",createComment);
("/post/create",createPost);
("/posts",getAllPosts);
("/like/post",likePost);
("/unlike/post",unlikePost);
