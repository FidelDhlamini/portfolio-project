import React from "react";
import Particles from "react-particles-js";

function ContactMe() {
  return (
    <div>
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#000000",
              },
            },
          },
        }}
      />
      <div className="contactme">
        <h1>Contact Me</h1>
      </div>
    </div>
  );
}

export default ContactMe;
