import React from 'react';
import Router from "./routes/Router" //manggil function router

// import { Routes, Route } from 'react-router-dom'
// import Home from "./views/Home"
// import About from "./views/About"
// import Contact from "./views/Contact"

//function component
// const App = () => {
//   return(
//     <div>
//       <Routes>
//         <Route path="/" exact element={<Home />} />
//         <Route path="/about" exact element={<About />} />
//         <Route path="/contact" exact element={<Contact />} />
//       </Routes>
//     </div>
//   )
// }

const App = () => {
  return(
    <div>
      <Router /> 
    </div>
  )
}

export default App;

