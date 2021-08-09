import React from 'react'
import img1 from "./fidel.jpeg";
// import Particles from "react-particles-js";

const About = () => {
    return (
        <div className="aboutme text-center">
            {/* <Particles
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
              color: "#fff"
            }
          }
        }
      }}
    /> */}
     
        <div className = "container-fluid">
       
        <div className="about-header">    
        <h1>About Me</h1>
        </div>
           <div className="row">
               <div className="col-sm-4">
               
                <div className="photo text-center" >
               <h5>Biography</h5>
               <img className="mypic" src={img1} class="img-fluid" alt="..."></img>
               <p> Fidel Dhlamini
               <p>Born: April 29,1996 Bushbuckridge,Mpumalanga
               <p>Education: Ekurhuleni West College Germiston(2015-2017),University Of Johannesburg(2018),CodeX(2019-2021),Orhovelani High School(2009-2013)</p>
               </p>
               </p>
               
               
               </div>
               </div>
               <div className="col col-lg">
         <div className="about-text text-center" >
         
          <h5>Web Development <span className= "red">and Design</span> </h5>
          <p>I am a full stack web developer and UI/UX designer with two and a half years of experience working with HTML,CSS,Bootstrap,Semantic UI,NodeJS,Spark Java,API development, MySQL and ReactJS to create responsive and user-friendly websites.I use agile practices like Test Driven Development (Mocha and Chai,JUnit4),Kanban and Scrum.Problem solving has always been a passion and I'm open to learning new things and sharing knowledge with others.</p>
          <a href="/contactme">
          <button  type="button">contact me</button>
          </a>
         </div>
                </div>

            </div> 
            </div>

            
        </div>
    )
}

export default About
