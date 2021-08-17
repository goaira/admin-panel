import React from "react";
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Header = () => {
    return (
        <div className="header">
            <li><AccountCircleIcon />Aerrow Sathish</li>
            <li><NotificationsNoneOutlinedIcon />Notifications</li>
            <li><SettingsIcon />Settings</li>
            <li style={{ paddingRight: 0 }}><ExitToAppIcon />Logout</li>
        </div>
    )
}

export default Header;