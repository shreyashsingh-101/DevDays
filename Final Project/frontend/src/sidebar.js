import React from "react";
import "./sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import { Avatar, IconButton } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import SidebarChat from "./SidebarChat";

const sidebar = () => {
  return (
    <div className="sidebar">
      
      <div className="sidebar__header">
        <Avatar />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>


      <div className="sidebar__search">
          <div className="sidebar__searchContainer">
              <SearchOutlined />
              <input type="text" placeholder="Search or start new chat" />
          </div>
      </div>
      <div className="sidebar__chats">
          <SidebarChat name ={"Friends"} msg= {"What is up?"} />
          <SidebarChat name ={"College"} msg= {"Bring you IDs."} />
          <SidebarChat name ={"Family Group"} msg= {"Jai Shree Ram"} />

      </div>
    </div>
  );
};

export default sidebar;
