import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

// const MainLayout = props => { //props untuk membuat layout, memudahkan untuk tidak perlu import Navbar dan Footer dibanyak tempat
//     return( //react fragment adalah tag seperti div tapi tidak ada guna apa apa
//         <React.Fragment> 
//             <Navbar />
//             {props.childern}
//             <Footer />
//         </React.Fragment>
//     )
// }
function MainLayout(props) {  //props untuk membuat layout, memudahkan untuk tidak perlu import Navbar dan Footer dibanyak tempat
    return( //react fragment adalah tag seperti div tapi tidak ada guna apa apa
      <React.Fragment>
        <Navbar />
        {props.children}
        <Footer />
      </React.Fragment>
    )
  }

export default MainLayout