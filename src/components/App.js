import React from "react";

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

function About() {
  return (
    <div id="about" >
      <h2> About </h2>
      <p> Hey this is pretty cool! Welcome Friend to the wonderful world of React!! :D</p>
    </div> 
  );
}


function App() {
  return (
    <div>
      <NavBar />
      {<Home/>}
      {<About/>}
    </div>
  );
}

export default App;
