import React from "react";
import Typed from "react-typed";


const Header = () => {
    return (

    <div className="header-wrapper">
        <div className="main-info">
            <h1>welcome to fidel's world</h1>
            <Typed  className="typed-text"strings={["Web Development","Pencil Sketching","Beat Making"]}
            typeSpeed={30}
            backSpeed={50}
            loop
            /> 
            {/* <a href="#" className="btn-main-offer">contact me</a> */}
                  
        </div>
    </div>
    )
}

export default Header
