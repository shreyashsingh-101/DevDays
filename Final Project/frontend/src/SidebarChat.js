import React from 'react'
import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";

const SidebarChat = (props) => {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat__info">
                <h2>{props.name}</h2>
                <p>{props.msg}</p>
            
            </div>
        </div>
    )
}

export default SidebarChat
