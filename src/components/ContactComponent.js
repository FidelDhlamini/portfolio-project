import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Result =()=>{
    return(
        <p>Message sent successfully</p>
    )
}

function ContactComponent(props) {

    const [result,showResult] = useState(false); 

    const sendEmail = (e) => {
        e.preventDefault();
      
        emailjs.sendForm("gmail", "template_v4ijni7", e.target, "user_LykztWEtKz2khkkVUojm2")
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          showResult(true);
      }
// hide result

      setTimeout(() =>{
          showResult(false)
      },5000)
       



    return(
        <div>
           <div className="container-fluid contactme">

<form action="" onSubmit={sendEmail}  >

<div className="singleItem">
  <label>Full Name</label>
  <input type="text" 
  name="fullName" 
  placeholder="Enter Your Full Name"
  required>
  </input>
   </div>

  <div className="singleItem">
  <label> E-mail</label>
  <input type="text" 
  className="email"  
  name="email"
  placeholder="Enter Your E-mail"
  required></input>
  </div>

  <div className="singleItem">
  <label> Phone Number</label>
  <input type="text" 
  className="phone"
  name="phone"
  placeholder="+27 (72) 456-7890"></input>
  </div>

  <div className="textarea singleItem">
  <label htmlFor="message"> Message/Comments</label>
  <textarea name="message" rows="5"
  placeholder="Your Message..."
></textarea>
  </div>


  <div className="btn">
    <button type="submit">Submit</button>
  </div>


  <div className="row">
       {
       result ? <Result/> : null
       } 
  </div>
  
 


</form>
</div>  
        </div>
    );
}
export default ContactComponent;