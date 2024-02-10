// import React from "react";
// import { directors } from "../data";

// function Directors() {
//   return <div>
//     ReactDOM.render(
//       <h1>Directors Page</h1>
//       <div name="Scott Derrickson">
//         <ul>
//           <li>Doctor Strange</li>
//           <li>Sinister</li>
//           <li>The Exorcism of Emily Rose</li>
//         </ul>

//       </div>
//       <div name="Mike Mitchell">
//         <ul>
//           <li>Trolls</li>
//           <li>Alvin and the Chipmunks</li>
//           <li>Chipwrecked</li>
//           <li>Sky High</li>
          
//         </ul>

//       </div>
//       <div name="Edward Zwick">
//         <ul>
//           <li>Jack Reacher</li>
//           <li>Never Go Back</li>
//           <li>Blood Diamon</li>
//           <li>The Siege</li>
          
//         </ul>

//       </div>
//     );
//   </div>;
// }

// export default Directors;



import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, index) => (
        <div key={index}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map((movie, idx) => (
              <li key={idx}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Directors;

