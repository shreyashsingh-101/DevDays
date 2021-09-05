import React from "react";
import "./Landing.css";
import Typewriter from "typewriter-effect";

const Landing = () => {
  return (
    <div className="landing">
      <div className="left">
        <h2>
          Hey, I'm <span className="name">Shreyash</span>
        </h2>
        <h3>
          an aspiring <span className="job__des">Web Developer.</span>
        </h3>
      </div>

      <div className="right">
        <div className="type">
          <Typewriter
            options={{
              strings: ["NodeJS", "React", "JavaScript", "CSS", "HTML", "Azure", "Docker"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
