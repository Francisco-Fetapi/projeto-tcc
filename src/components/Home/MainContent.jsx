import React from "react";
import Posts from "../Posts";
import AddPost from "../AddPost";

export default function MainContent() {
  return (
    <div className="main-content">
      <AddPost />
      <Posts target="todos" />
    </div>
  );
}
