//Answer 1
import React ,{usestate} from "react"

function LiveInput(){
  const{name,setName}=usestate("");
  return(
    <div>

      <input type="text"
       placeholder="enter name" 
       onchange={(e)=>setName(e.target.value)}

       />
      
      <h1>diya</h1>
    </div>
  );
}



//Answer 2

import react from "react"
import{BrowserRouter,Routes,Route,link} from "react-router-dom"


function Home(){
  return <h2>Home page</h2>
}
function About(){
  return <h2>About</h2>
}
function contact(){
  return <h2>Contact</h2>
}

function app(){
  return(
    <BrowserRouter>
    <nav>
      <link to="/"Home ></link>
      <link to="/"About ></link>
      <link to="/"Contact ></link>
    </nav>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/" element={<About/>}/>
       <Route path="/" element={<Contact/>}/>

    </Routes>
    </BrowserRouter>

  );
}

export default app;