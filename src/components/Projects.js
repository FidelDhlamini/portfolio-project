import React from 'react'
import Card from './Card';
import setbill from "./set-bill.jpeg";
import regnum from "./regnum.jpeg";
import imbokodo from "./imbokodo.jpeg";



function Projects() {
  return (

  <div className="projects text-center">

  <div className="container-fluid">
    

    <div className="container-fluid cards">

    <div className="cards-first">
    <div className="row">
    <div class="col-md-4">
    <Card
    title="Imbokodo : Curb GBV"
    imageUrl={imbokodo}
    body="This web app provides South Africans an advantage to report gender-based violence silently and share their current location so that police and ambulances can easily track them"
    githubLink="https://github.com/FidelDhlamini/curb-gbv"
    link="https://curb-gbv.herokuapp.com/"
    />
    </div>

    <div class="col-md-4">
    <Card
    title="Settings Bill"
    imageUrl= {setbill}
    body="In this web app you first update the cost for call and sms and at what total should it should warn you,critical level then you update settings,select the call or sms radio button and start adding.The total should change colour when you reach the warning and critical levels"
    link="https://settings-bill-expressj.herokuapp.com/"
    githubLink="https://github.com/FidelDhlamini/settings-bill-expressjs"
    
    />
    </div>

    <div class="col-md-4">
    <Card
    title="Registration Numbers"
    imageUrl={regnum}
    body="This is a web app for storing Western Cape vehicle registration numbers from the regions Stellenbosch(CL),Belville(CF) and Cape Town(CA) "
    link="https://regnumbers-app.herokuapp.com/"
    githubLink="https://github.com/FidelDhlamini/registration_numbers_webapp"
    />
     </div>

   

     

 

    

    </div>
    </div>

    <div className="cards-second">
    <div className="row">
    <div class="col-md-4">
    <Card
    title="Rest-Bafe2"
    imageUrl=""
    body=""
    githubLink="https://github.com/FidelDhlamini/RestBafe2/tree/Fidel"
    />
    </div>

    

   
    <div class="col-md-4">
    <Card
    title="H20-Leveler"
    imageUrl=""
    body=""
    githubLink="https://github.com/FidelDhlamini/H2O-leveler/tree/Fidel"
    />
     </div>

     <div class="col-md-4">
    <Card
    title="Taxulator App"
    imageUrl=""
    body=""
    githubLink="https://github.com/FidelDhlamini/taxulator-app"
    />
    </div>

    </div>
    </div>

    </div>

    

   
    </div>

    
      
    </div>
  )
}

export default Projects

