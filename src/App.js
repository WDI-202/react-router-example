import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import ClassList from "./components/ClassList";
import Info from "./components/Info";
import Participant from "./components/Participant";
import BlogPost from "./components/BlogPost";
import AllBlogs from "./components/AllBlogs";

import {blogPosts} from "./utils/sampleBlogs";
import participants from "./utils/ParticipantList";

import "./App.css";


function App() {

  const [allBlogs, setAllBlogs] = useState(blogPosts)

  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route index element={<Info />} />
            <Route path="class-list" element={<ClassList />} />
            <Route path=":participant" element={<Participant participants={participants}/>} />
          </Route>
          <Route path="/blogs" element={<Blogs />} >
            <Route path="/blogs/all" element={<AllBlogs blogPosts={blogPosts}/>} />
            {/* <Route path="/blogs/single-blog/:blogId" element={<BlogPost />} /> Absolute Route Version*/}
            <Route path="single-blog/:blogId" element={<BlogPost />} /> {/* Relative Route Version*/}
          </Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
