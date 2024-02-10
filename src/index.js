import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";

function Index() {
return(
 <div>
   <Router>
    <App />
  </Router>,
 </div>
  
);
}
export default Index;