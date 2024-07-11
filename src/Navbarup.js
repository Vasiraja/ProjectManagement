import React from "react";
import "./Navbarup.css";
import SearchIcon from "@mui/icons-material/Search";
import ProfileIcon from "@mui/icons-material/Person2Outlined";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import NotePad from "@mui/icons-material/ArticleOutlined";
import Docs from "@mui/icons-material/Description";

import VideocamIcon from "@mui/icons-material/VideocamOutlined";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarmsOutlined";
import Menu from "@mui/icons-material/Apps";
import AddLogo from "@mui/icons-material/ControlPoint";
import Tooltip from "@mui/material/Tooltip";

export const Navbarup = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img
          src="https://app-cdn.clickup.com/clickup-symbol_color.6c3fc778987344003164b4b4c9826eb8.svg"
          alt="ClickUp Symbol"
        />
      </div>
      <div className="searchbar">
        <Tooltip title="Open Search" arrow>
          <button className="navsearchbar">
            <SearchIcon />

            <p className="searchtext">search</p>
          </button>
        </Tooltip>
      </div>
      <div className="askaiupgrade">
        <div className="askaibutton">
          <button className="Askai">
            <p className="Askaibarinnertext">Ask AI</p>
          </button>
          <button className="Upgrade">
            <p className="Upgradeinnertext">Upgrade</p>
          </button>
        </div>
      </div>

      <div className="addnewtask">
        <button>
          <AddLogo style={{ fontSize: 20 }} />
          New
        </button>
      </div>
      <div className="buttons">
        <Tooltip title="Open My Tasks" arrow>
          <button className="mytasksicon">
            <TaskAltIcon style={{ fontSize: 20 }} />
          </button>
        </Tooltip>
        <Tooltip title="Open Notepad" arrow>
          <button className="mytasksicon">
            <NotePad style={{ fontSize: 20 }} />
          </button>
        </Tooltip>
        <Tooltip title="Record a Clip" arrow>
          <button className="mytasksicon">
            <VideocamIcon style={{ fontSize: 20 }} />
          </button>
        </Tooltip>
        <Tooltip title="Create a Reminder" arrow>
          <button className="mytasksicon">
            <AccessAlarmsIcon style={{ fontSize: 20 }} />
          </button>
        </Tooltip>
        <Tooltip title="Create a Doc" arrow>
          <button className="mytasksicon">
            <Docs style={{ fontSize: 20 }} />
          </button>
        </Tooltip>
        <Tooltip title="Quick Action Menu" arrow>
          <button className="mytasksicon">
            <Menu style={{ fontSize: 20 }} />
          </button>
        </Tooltip>

        <div className="profile">
          <ProfileIcon />
        </div>
      </div>
    </div>
  );
};
