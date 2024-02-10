// import React from "react";
// import { NavLink } from "react-router-dom";
// import { BrowserRouter, Route, Router } from "react-router-dom/cjs/react-router-dom.min";
// import Home from "./Home";
// import Movies from "./Movies";
// import Directors from "./Directors";
// import Actors from "./Actors";

// function NavBar() {
//   return (<div>
//       <BrowserRouter>
//       <Router>
//         <NavLink />
//       </Router>
//       <Route path="/">
//         <Home />
//       </Route>
//       <Route path="/movies">
//         <Movies />
//       </Route>
//       <Route path="/directors">
//         <Directors />
//       </Route>
//       <Route path="/actors">
//         <Actors />
//       </Route>
//       </BrowserRouter>
      
    
//   </div>
//   )
// }

// export default NavBar;

import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <NavLink exact to="/" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/movies" activeClassName="active">
        Movies
      </NavLink>
      <NavLink to="/directors" activeClassName="active">
        Directors
      </NavLink>
      <NavLink to="/actors" activeClassName="active">
        Actors
      </NavLink>
    </div>
  );
}

export default NavBar;

