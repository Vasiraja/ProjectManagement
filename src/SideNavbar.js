import React, { useState } from "react";
import Home from "@mui/icons-material/HomeOutlined";
import InboxIcon from "@mui/icons-material/InboxOutlined";
import DashBoard from "@mui/icons-material/SignalCellularAltOutlined";
import TimeSheet from "@mui/icons-material/TimerOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHorizOutlined";
import VideocamIcon from "@mui/icons-material/VideocamOutlined";
import Favoruites from "@mui/icons-material/StarOutlineOutlined";
import UserAdd from "@mui/icons-material/PersonAddAlt1Outlined";
import Spaces from "@mui/icons-material/Workspaces";
import HelpIcon from "@mui/icons-material/HelpOutline";
import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import "./SideNavbar.css";
import Pin from "@mui/icons-material/PushPin";
import Goals from "@mui/icons-material/EmojiEvents";
import Whiteboards from "@mui/icons-material/BorderColor";
import Pulse from "@mui/icons-material/Sensors";
import Docs from "@mui/icons-material/Description";

import Clips from "@mui/icons-material/VideocamOutlined";
import { Sidepanel } from "./Sidepanel";

export const SideNavbar = () => {
  const [contenttype, setContenttype] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleContentType = (type) => {
    setContenttype(type);
  };
  const toggleclick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sidenavheader">
      <div className="sidenavbuttons">
        <Tooltip title="Home" placement="right-end" arrow>
          <Link to="/">
            <button>
              <Home />
            </button>
          </Link>
        </Tooltip>
        <Tooltip title="Inbox" placement="right-end" arrow>
          <Link to="/inbox">
            <button>
              <InboxIcon />
            </button>
          </Link>
        </Tooltip>
        <Tooltip title="Docs" placement="right-end" arrow>
          <Link to="/docs">
            <button>
              <Docs />
            </button>
          </Link>
        </Tooltip>
        <Tooltip title="Dashboard" placement="right-end" arrow>
          <button onClick={() => handleContentType("Dashboard")}>
            <DashBoard />
          </button>
        </Tooltip>
        <Tooltip title="Videocam" placement="right-end" arrow>
          <button onClick={() => handleContentType("Videocam")}>
            <VideocamIcon />
          </button>
        </Tooltip>
        <Tooltip title="Time Sheet" placement="right-end" arrow>
          <button onClick={() => handleContentType("Time Sheet")}>
            <TimeSheet />
          </button>
        </Tooltip>
        <Tooltip title="More" placement="right-end" arrow>
          <button onClick={toggleclick}>
            <MoreHorizIcon />
          </button>
          {isOpen && (
            <div className="dropdownmenu">
              <ul>
                <Link to="/docs">
                  <li>
                    <div className="lists">
                      <span>
                        <Docs style={{ fontSize: "18px" }} />
                      </span>
                      <p>Docs</p>
                    </div>
                    <span>
                      <Pin style={{ fontSize: "17px" }} />
                    </span>
                  </li>
                </Link>
                <li>
                  <div className="lists">
                    <span>
                      <DashBoard style={{ fontSize: "18px" }} />
                    </span>
                    <p>Dashboard</p>
                  </div>
                  <span>
                    <Pin style={{ fontSize: "17px" }} />
                  </span>
                </li>
                <li>
                  <div className="lists">
                    <span>
                      <Whiteboards style={{ fontSize: "18px" }} />
                    </span>
                    <p>Whiteboards</p>
                  </div>
                  <span>
                    <Pin style={{ fontSize: "17px" }} />
                  </span>
                </li>
                <li>
                  <div className="lists">
                    <span>
                      <Clips style={{ fontSize: "18px" }} />
                    </span>
                    <p>Clips</p>
                  </div>
                  <span>
                    <Pin style={{ fontSize: "17px" }} />
                  </span>
                </li>
                <li>
                  <div className="lists">
                    <span>
                      <Pulse style={{ fontSize: "18px" }} />
                    </span>
                    <p>Pulse</p>
                  </div>
                  <span>
                    <Pin style={{ fontSize: "17px" }} />
                  </span>
                </li>
                <li>
                  <div className="lists">
                    <span>
                      <Goals style={{ fontSize: "18px" }} />
                    </span>
                    <p>Goals</p>
                  </div>
                  <span>
                    <Pin style={{ fontSize: "17px" }} />
                  </span>
                </li>
                <li>
                  <div className="lists">
                    <span>
                      <TimeSheet style={{ fontSize: "18px" }} />
                    </span>
                    <p>Timesheets</p>
                  </div>
                  <span>
                    <Pin style={{ fontSize: "17px" }} />
                  </span>
                </li>
              </ul>
            </div>
          )}
        </Tooltip>
      </div>
      <div className="sidenavadditionalbuttons">
        <div className="firstside">
          <button>
            <Favoruites />
          </button>
          <button>
            <Spaces />
          </button>
        </div>
        <div className="secondside">
          <button>
            <UserAdd />
          </button>
          <button>
            <HelpIcon />
          </button>
        </div>
      </div>
      {contenttype && <div>{/* Render content based on contenttype */}</div>}

      <Sidepanel />
    </div>
  );
};
