import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";

import ArticleList from "./ArticleList";
console.log(blogData);

function App() {
  const {name ,about,image} = blogData
  const {posts} = blogData
  return (
    <div className="App">
      <Header 
       name={name}
      />
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
      <About 
         about={about}
         image={image}
         />
      <ArticleList
      
      posts={posts}
      />
      
      </div>
)}

export default App;
