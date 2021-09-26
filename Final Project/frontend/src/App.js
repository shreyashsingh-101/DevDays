import { useEffect, useState } from "react";
import Pusher from "pusher-js";
import "./App.css";
import Sidebar from "./sidebar";
import Chat from "./Chat";
import axios from "axios";
import Home from "./Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./Contact";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios
      .get("https://the-chatapp-backend.herokuapp.com/messages/sync")
      .then((response) => {
        setMessages(response.data);
      });
  }, []);

  useEffect(() => {
    var pusher = new Pusher("baaa43a26f3b8c202ff6", {
      cluster: "eu",
    });

    var channel = pusher.subscribe("messages");
    channel.bind("inserted", function (data) {
      setMessages([...messages, data]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/chat">
            <div className="chat__app">
              <div className="chat__app__body">
                <Sidebar />
                <Chat messages={messages} />
              </div>
            </div>
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
