
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Particles from "react-particles-js";
import Navbar from './components/Navbar';
import Header from './components/Header';
import { BrowserRouter as Router,Route, Switch} from "react-router-dom";
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ContactComponent from './components/ContactComponent';







function App() {
  return (
    <>
    <Router>
    
    <Switch>
 
    < Route path="/aboutme">
    <Navbar/>
      <About/>
      <Footer/>
    </Route>

    {/* < Route path="/experience">
    <Navbar/>
     <Experience/>
     <Footer/>
    </Route> */}
    
    < Route path="/projects">
    <Navbar/>
      <Projects/>
      <Footer/>
    </Route>

    < Route path="/contactme">
    <Navbar/>
      <ContactComponent/>
      <Footer/>
    </Route>
    <Route path="/" exact>
    <Particles
    className="particles-canvas"
      params={{
        particles:{
          number:{
            value: 40,
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
    />
    <Navbar/>
    <Header/>
    <Footer/>
     
    </Route>
    </Switch>
  
 
    
    

    </Router>
    
    
    
    
  
     
    </>
  );
}

export default App;
