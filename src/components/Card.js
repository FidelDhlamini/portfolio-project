import React from "react";
import "./Card.css"
import {
   
    FaGithub,
  } from "react-icons/fa";

function Card({title,imageUrl,body,link,githubLink}) {
    return (
        <div className="container-fluid">
        <div className="card-container">
        <div className="image-container">
            <img src={imageUrl} alt=""/>
        </div>
        <div className="card-content">
        <div className="card-title">
            <h3>{title}</h3>

        </div>
        <div className="card-body">
            <p>{body}</p>
        </div>

        </div>
        <div className="githubLink">
        <a href={githubLink} >
        <FaGithub  className="footer-icons"> Github Repository </FaGithub>
        </a>
        </div>
       
        <div className="btn">
            <button>
                <a href={link}>
                    Open App
                </a>
            </button>
        </div>

        </div>
        </div>
    )
}

export default Card
