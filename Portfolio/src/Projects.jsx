import React from "react";
import "./Projects.css";
import Card_pro from "./Card_pro";

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <div className="heading"> Projects </div>

      <div className="card__row">
        <Card_pro
          img={"1.png"}
          title={"React Piano"}
          desc={"A simple Responsive Piano based on React."}
          link1={'https://ssreact-piano.netlify.app'}
          link2={'https://github.com/shreyashsingh-101/Piano'}
        />
        <Card_pro
          img={"3.png"}
          title={"The Coders Adda"}
          desc={"The One Stop Destination for developers."}
          link1={'http://codersadda.herokuapp.com/'}
          link2={'https://github.com/shreyashsingh-101/Hack-Nagpur'}
        />
        <Card_pro
          img={"2.png"}
          title={"Teach for Tomorrow"}
          desc={"Organising a Community of people who are willing to teach for free."}
          link1={'https://teach-for-tomorrow.herokuapp.com'}
          link2={'https://github.com/shreyashsingh-101/eduthon'}
        />
        <Card_pro
          img={"4.png"}
          title={"Meme Generator"}
          desc={"A React based Meme Generator which uses imgflip API."}
          link1={'https://confident-tereshkova-2c7135.netlify.app/'}
          link2={'https://github.com/shreyashsingh-101/Devsnest-Tasks/tree/master/THA%20Day%2022/day22'}
        />
      </div>
    </div>
  );
};

export default Projects;
