import React from "react";

// import { Container } from './styles';
import "./assets/css/app.css";
import Header from "./components/Header";
import PostList from "./components/PostList";

export default function App() {
  return (
    <div>
      <Header/>
      <PostList/>
    </div>
  );
}
