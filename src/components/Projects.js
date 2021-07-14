import React, { Component } from 'react'
import Particles from "react-particles-js";
import Typed from "react-typed";

export default class Projects extends Component {
    render() {
        return (
            <div>
            <Particles
    className="particles-canvas"
      params={{
        particles:{
          number:{
            value: 50,
            density:{
              enable:true,
              value_area: 900
            }
          },
          shape:{
            type:"circle",
            stroke:{
              width:6,
              color: "#000000"
            }
          }
        }
      }}
    />
    <div className="projects">
        <div className="main-info-projects">
            <h1>projects</h1>
            <Typed  className="typed-text-projects"strings={["For every line of code written,the world gets better"]}
            typeSpeed={20}
            backSpeed={40}
            loop
            />
            {/* <a href="#" className="btn-main-offer">contact me</a> */}
                  
        </div>
    </div>
               
                
            </div>
        )
    }
}
