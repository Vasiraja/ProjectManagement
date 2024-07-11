import React from "react";
import "./HomeComponent.css";
import Draggable from "react-draggable";
import { ResizableBox } from "react-resizable";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Settings  from "@mui/icons-material/SettingsOutlined";
import { Button } from "@mui/material";
import Expand from "@mui/icons-material/OpenInFull";
import CalenderView from "@mui/icons-material/CalendarMonth";
import GoBack from "@mui/icons-material/KeyboardArrowLeft";
import GoForward from "@mui/icons-material/KeyboardArrowRight";
import AddIcon from "@mui/icons-material/Add";
import Home from "@mui/icons-material/HomeOutlined"
export const HomeComponent = () => {
  const viewdate = new Date();
  console.log(viewdate)
  const day = viewdate.getDate();
  const month = viewdate.getMonth();
  const year = viewdate.getFullYear()
  return (
    <div className="Homecomponent">
      <div className="homenavigationcontainer">
        <div className="Homenavigation">
          <div className="headcontent">
            <Home style={{ fontSize: "17px" }} />{" "}
            <p style={{ fontSize: "17px" }}>Home</p>
          </div>
          <div className="lastcontent">
            <button className="managecardbutton">Manage Cards</button>
            <Settings
              style={{
                fontSize: "17px",
                borderLeft: "0.5px solid #dad8d8",
                paddingLeft: "5px",
              }}
            />
          </div>
        </div>
      </div>

      <div className="firstcardcontainer">
        <Draggable>
          <ResizableBox
            width={700}
            height={500}
            minConstraints={[200, 150]}
            maxConstraints={[600, 400]}
            className="box"
          >
            <div className="content">
              <div className="cardheader">
                <div className="sideheader">
                  <span style={{ fontWeight: "bold" }}>My Work</span>
                </div>
                <div className="asideheader">
                  <span className="header-item-expand">
                    <Expand style={{ fontSize: "15px" }} />
                  </span>
                  <span className="header-item">
                    <Settings style={{ fontSize: "15px" }} />
                  </span>
                  <span className="header-item" style={{ width: "20px" }}>
                    <MoreHorizIcon />
                  </span>
                </div>
              </div>
              <div className="card-body">
                <img
                  src="https://app-cdn.clickup.com/empty-legacy-my-work.cdcccb6c21472ef6ea885e70dac00d41.svg"
                  alt="No data placeholder"
                  className="cu-no-data-placeholder__image"
                />

                <p style={{ fontSize: "12px", fontWeight: "-500px" }}>
                  Tasks and Reminders assigned to you will show here
                </p>
                <Button style={{ backgroundColor: "#6e5ae9", color: "white" }}>
                  <AddIcon
                    style={{
                      fontSize: "15px",
                      marginRight: "5px",
                      marginBottom: "3px",
                    }}
                  />
                  Add task or reminder
                </Button>
              </div>
            </div>
          </ResizableBox>
        </Draggable>
      </div>

      <div className="secondcardcontainer">
        <Draggable>
          <ResizableBox
            width={450}
            height={370}
            minConstraints={[200, 150]}
            maxConstraints={[600, 400]}
            className="box"
          >
            <div className="content">
              <div className="cardheader">
                <div className="sideheader">
                  <span style={{ fontWeight: "bold" }}>Agenda</span>
                </div>
                <div className="asideheader">
                  <span className="header-item-expand">
                    <Expand style={{ fontSize: "15px" }} />
                  </span>
                  <span className="header-item" style={{ fontSize: "15px" }}>
                    <MoreHorizIcon />
                  </span>
                </div>
              </div>
              <div className="secondcardheader">
                <div className="date">
                  <p>{day}</p>/<p>{month + 1}</p>/<p>{year}</p>
                </div>
                <div className="navigatearrow">
                  <p>
                    <GoBack />
                  </p>
                  <p>
                    <GoForward />
                  </p>
                </div>
                <div className="dayandlogo">
                  <p>Today</p>
                  <CalenderView style={{ width: "20px" }} />
                </div>
              </div>
              <div className="card-body">
                <img
                  src="https://app-cdn.clickup.com/empty-agenda.a27b90cb267ab7d1bc9fbafe56e8ac03.svg"
                  alt="No data placeholder"
                  className="cu-no-data-placeholder__image"
                />
                <p style={{ fontSize: "12px", fontWeight: "-500px" }}>
                  Agenda items from your calendars will show here.
                </p>

                <Button style={{ backgroundColor: "#6e5ae9", color: "white" }}>
                  <AddIcon
                    style={{
                      fontSize: "15px",
                      marginRight: "5px",
                      marginBottom: "3px",
                    }}
                  />
                  Add Calender Integrations
                </Button>
              </div>
            </div>
          </ResizableBox>
        </Draggable>
      </div>

      <div className="thirdcardcontainer">
        <Draggable>
          <ResizableBox
            width={450}
            height={370}
            minConstraints={[200, 150]}
            maxConstraints={[600, 400]}
            className="box"
          >
            <div className="content">
              <div className="cardheader">
                <div className="sideheader">
                  <p style={{ fontWeight: "bold" }}>Assigned to me</p>
                </div>
                <div className="asideheader">
                  <span className="header-item">
                    <Settings style={{ fontSize: "15px" }} />
                  </span>
                  <span className="header-item-expand">
                    <Expand style={{ fontSize: "15px" }} />
                  </span>

                  <span className="header-item" style={{ width: "20px" }}>
                    <AddIcon
                      style={{
                        fontSize: "15px",
                        marginRight: "5px",
                        marginBottom: "3px",
                      }}
                    />
                  </span>
                </div>
              </div>
              <div className="card-body">
                <img
                  src="https://app-cdn.clickup.com/empty-my-work.0bab69d2fd9dbf80392b1dc95c9a8595.svg"
                  alt="No data placeholder"
                  className="cu-no-data-placeholder__image"
                />

                <p style={{ fontSize: "12px", fontWeight: "-500px" }}>
                  Tasks assigned to you will appear here.
                </p>
                <Button style={{ backgroundColor: "#6e5ae9", color: "white" }}>
                  <AddIcon
                    style={{
                      fontSize: "15px",
                      marginRight: "5px",
                      marginBottom: "3px",
                    }}
                  />
                  Add task
                </Button>
              </div>
            </div>
          </ResizableBox>
        </Draggable>
      </div>

      <div className="fourthcardcontainer">
        <Draggable>
          <ResizableBox
            width={1180}
            height={270}
            minConstraints={[200, 150]}
            maxConstraints={[600, 400]}
            className="box"
          >
            <div className="content">
              <div className="cardheader">
                <div className="sideheader">
                  <span style={{ fontWeight: "bold" }}>LineUp</span>
                </div>
                <div className="asideheader">
                  <span className="header-item">
                    <MoreHorizIcon style={{ fontSize: "15px" }} />
                  </span>

                  <span className="header-item" style={{ width: "20px" }}>
                    <AddIcon
                      style={{
                        fontSize: "15px",
                        marginRight: "5px",
                        marginBottom: "3px",
                      }}
                    />
                  </span>
                </div>
              </div>
              <div className="card-body">
                <img
                  src="https://app-cdn.clickup.com/empty-lineup.6af62efc720232f88f943a58cdfef20d.svg"
                  alt="No data placeholder"
                  className="cu-no-data-placeholder__image"
                />

                <p style={{ fontSize: "12px", fontWeight: "-500px" }}>
                  Tasks assigned to you will appear here.
                </p>
                <Button style={{ backgroundColor: "#6e5ae9", color: "white" }}>
                  <AddIcon
                    style={{
                      fontSize: "15px",
                      marginRight: "5px",
                      marginBottom: "3px",
                    }}
                  />
                  Add task
                </Button>
              </div>
            </div>
          </ResizableBox>
        </Draggable>
      </div>
    </div>
  );
};
