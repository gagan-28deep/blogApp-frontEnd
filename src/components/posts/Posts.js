import React from "react";
import "./posts.css";

import Post from "../post/Post";
const Posts = ({ posts }) => {
  // setInterval(async () => {
  //   const res = await fetch(
  //     `https://blogapp-backend-production.up.railway.app/api/v1/hello`
  //   );
  //   console.log("Hello");
  // }, 10000);
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
      {/* <Post />
      <Post />
      <Post />
      <Post />
      <Post /> */}
    </div>
  );
};

export default Posts;
