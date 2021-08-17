import React, { useState, useEffect } from "react";
import { sidebarData } from "./sidebardata";
import DehazeIcon from '@material-ui/icons/Dehaze';


const Sidebar = () => {

    const [mini, setMini] = useState(true);
    const [width, setWidth] = useState("");

    useEffect(() => {
        mini ? setWidth("300px") : setWidth("80px");
    }, [mini]);

    return (
        <div className="sidebar"
            style={{ width: width }}
        >
            <div className="logo">
                {mini ? <h3 style={{ textAlign: "center" }}>Loop Creation</h3> : ''}
                <div onClick={() => {
                    setMini(!mini);
                }} style={{ cursor: "pointer" }}>
                    <DehazeIcon />
                </div>
            </div>
            <ul className="sidebarList">
                {sidebarData.map((val, key) => {
                    return (
                        <li key={key} onClick={() => {
                            window.location.pathname = val.link;
                        }}
                            onMouseEnter={() => setMini(true)}
                            onMouseLeave={() => !mini ? setMini(false) : ''}
                            className="menuz">
                            <div id="menuicon">{val.icon}</div>{" "}
                            {mini ? <div id="menutitle">{val.title}</div> : ''}
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Sidebar;