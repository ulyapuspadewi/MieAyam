import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from "../views/Home"
import About from "../views/About"
import Contact from "../views/Contact"
import Detail from "../views/Detail"
import NotFound from "../views/NotFound"


//ini pake router v6
// const Router = () => {
//     return( // route harus dibungkus oleh routes
//       <React.Fragment>
//           <Routes>
//               <Route path="/" exact element={<Home />} /> 
//               <Route path="/about" exact element={<About />} />
//               <Route path="/contact" exact element={<Contact />} />
//               <Route path="/detail/:id" exact element={<Detail />} />
//               <Route element={<NotFound />} />
//           </Routes>
//       </React.Fragment>
//     )// detail diberi parameter id
// }

//ini pake router v5.2
const Routes = () => {
    return(
      <React.Fragment>
            <Switch>
              <Route path="/" exact component={Home} /> 
              <Route path="/about" exact component={About} />
              <Route path="/contact" exact component={Contact} />
              <Route path="/detail/:id" exact component={Detail} />
              <Route component={NotFound} />
            </Switch>
      </React.Fragment>
    )// detail diberi parameter id
}
  
export default Routes;