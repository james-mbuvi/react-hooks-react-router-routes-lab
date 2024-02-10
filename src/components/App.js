import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
   

   <BrowserRouter>
   <NavBar />
   
    
   
     <Route path= "/movies">
<Movies />
     </Route>
     <Route path= "/directors">
<Directors />
     </Route>
     <Route path= "/actors">
<Actors />
     </Route>
     <Route path= "/">
<Home/>
     </Route>
   </BrowserRouter>  
  
  )
}

export default App;





