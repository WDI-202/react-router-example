import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import './App.css';

function App() {
  const [name, setName] = useState("Who am I?")
  return (
    <div className="App">
      <header className="App-header">
      {name}
      <Routes>
        <Route path="/" element={<Home setName={setName}/>} />
        <Route path="/about" element={<About setName={setName}/>} />
      </Routes>
      </header>
    </div>
  );
}

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  )
}

const Home = (props) => {
  return (
    <div>
      <Navbar />
      <h1>Home Page</h1>
      <button onClick={()=>{
        props.setName("James")
      }}>James</button>
    </div>
  )
}

const About = (props) => {
  return (
    <div>
      <Navbar />
    <h1>About Page</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac eros efficitur, dignissim felis a, vehicula tellus. Maecenas gravida risus ex, id pellentesque ex blandit non. Curabitur egestas rhoncus sapien, ut facilisis arcu rhoncus eu. Maecenas tristique elit a tortor pharetra, vitae elementum felis pulvinar. Morbi ultricies metus sed sodales mattis. Mauris ac neque non sapien congue sodales sit amet nec turpis. Nunc fermentum turpis id nibh malesuada, eu malesuada felis sollicitudin. Nulla rutrum ex nulla, non efficitur tellus mollis vel. Suspendisse potenti. Donec volutpat, magna sed fringilla dictum, mauris massa dictum nunc, eget malesuada urna ligula sit amet lectus. Aliquam pulvinar tincidunt leo et porttitor. Etiam felis massa, tempus non leo at, lacinia tincidunt libero. Suspendisse consequat, dolor sed condimentum malesuada, velit diam mattis velit, a imperdiet ligula nunc in ligula. Sed vehicula lacus libero, sit amet fermentum mi cursus quis. Nulla velit purus, condimentum quis tortor et, dictum finibus lacus. Quisque tellus felis, ornare in orci non, scelerisque suscipit velit.</p>
    <button onClick={()=>{
        props.setName("Ginny")
      }}>Ginny</button>
   
    </div>
  )
}

export default App;
