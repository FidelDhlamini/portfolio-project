import React from 'react'
import Particles from "react-particles-js";
import img1 from "./fidel.jpeg";


function AboutMe() {
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
              width:7,
              color: "#fff"
            }
          }
        }
      }}
    />
    <div className="aboutme">
    <section className="about">
      <div className="mainabt">
      <img className="mypic" src={img1} class="img-fluid" alt="..."></img>
      <li>Fidel Dhlamini</li>
        <div className="about-text">
          <h1>About Me</h1>
          <h5>Web Development <span className= "red">and Design</span> </h5>
          <p> I am a full stack web developer and UI/UX designer with two and a half years of experience working with HTML,CSS,Bootstrap,Semantic UI,NodeJS,Spark Java,API development, MySQL and ReactJS to create responsive and user-friendly websites.I use agile practices like Test Driven Development (Mocha and Chai,JUnit4),Kanban and Scrum.Problem solving has always been a passion and I'm open to learning new things and sharing knowledge with others.  </p>
          <button href="/contactme"type="button">contact me</button>

        </div>

      </div>

    </section>
          
    </div>
    
        </div>
      
    )
}

export default AboutMe
