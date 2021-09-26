import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Navbar from "./Navbar";
import Sawo from "sawo";

const Home = () => {
  useEffect(() => {
    var config = {
      containerID: "sawo-container",

      identifierType: "phone_number_sms",

      apiKey: "3ea82165-8136-4a7a-bf44-2d4d88a74b48",

      onSuccess: (payload) => {
        window.location.href = "/chat";
      },
    };
    let sawo = new Sawo(config);
    sawo.showForm();
  }, []);
  return (
    <div className="Home">
      <Navbar />
      <div className="container">
        <div className="left">
          THE CHAT <span className="diff">APP</span>
          <div className="login">
            <div id="sawo-container"></div>
          </div>

         
        </div>
        <div className="right">
          <img src="land.png" />
        </div>
      </div>
    </div>
  );
};

export default Home;
