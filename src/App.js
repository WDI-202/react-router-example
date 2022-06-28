import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import ClassList from "./components/ClassList";
import Info from "./components/Info";
import Participant from "./components/Participant";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="/about/info" element={<Info />}/>
          <Route path="class-list" element={<ClassList />}>
            <Route path=":participant" element={<Participant />} />
          </Route>
        </Route>
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
      </header>
    </div>
  );
}

export default App;
