import "./DocsComponent.css";
import React from 'react'
import { Card, CardContent, Typography } from "@mui/material";
 import Docs from "@mui/icons-material/Description";
import SearchIcon from "@mui/icons-material/Search";

export const DocsComponent = () => {
  return (
    <div className="DocsComponent">
      <div className="homenavigationcontainer">
        <div className="Homenavigation">
          <div className="headcontent">
            <Docs style={{ fontSize: "17px" }} />{" "}
            <p style={{ fontSize: "17px" }}>Docs</p>
          </div>
          <div className="lastcontent">
            <button className="searchbutton"><SearchIcon style={{fontSize:"14px"}}/>Search Docs</button>

            <button className="createdocbutton">Create Doc</button>
            <button className="new">v</button>
          </div>
        </div>
      </div>
      <div
        className="cardcontainer"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Card
          style={{ maxWidth: 300, margin: "20px auto", padding: "10px" }}
          className="firstcard"
        >
          <CardContent>
            <Typography
              variant="h6"
              component="div"
              style={{ marginRight: "200px", fontSize: "15px" }}
            >
              Recents
            </Typography>
            <Typography variant="body2" style={{ marginRight: "130px" }}>
              <img
                class="Empty-fixedSizeImage-yMBr6"
                src="https://app-cdn.clickup.com/no-favorites-docs.04932f5310ced65716502d27f1efd906.svg"
                alt="No recent docs"
              ></img>
              <p>Your recently opened Docs will show here.</p>
            </Typography>
          </CardContent>
        </Card>
        <Card style={{ maxWidth: 300, margin: "20px auto", padding: "10px" }}>
          <CardContent>
            <Typography
              variant="h6"
              component="div"
              style={{ marginRight: "200px", fontSize: "15px" }}
            >
              Favourites
            </Typography>
            <Typography variant="body2">
              <img
                class="Empty-fixedSizeImage-yMBr6"
                src="https://app-cdn.clickup.com/no-favorites-docs.04932f5310ced65716502d27f1efd906.svg"
                alt="No recent docs"
              ></img>
              <p> Your favorited Docs will show here.</p>
            </Typography>
          </CardContent>
        </Card>
        <Card
          style={{
            maxWidth: 300,
            maxHeight: 300,
            margin: "20px auto",
            padding: "10px",
          }}
        >
          <CardContent>
            <Typography
              variant="h6"
              component="div"
              style={{ marginRight: "160px", fontSize: "15px" }}
            >
              Created by me
            </Typography>
            <Typography variant="body2">
              <img
                class="Empty-fixedSizeImage-yMBr6"
                src="https://app-cdn.clickup.com/no-favorites-docs.04932f5310ced65716502d27f1efd906.svg"
                alt="No recent docs"
              ></img>
              <p> All Docs created by you will show here.</p>
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div className="wikiscontainers">
        <div className="header">
          <div style={{ fontSize: "14px" }}>Create first Wiki</div>
          <div style={{ color: "#646262", fontSize: "14px" }}>
            Use wikis to organize information, and prioritize it as results when
            you Ask AI. You can create a new wiki or import from Confluence.
          </div>
        </div>
        <div className="content">
          <div className="firstwiki">
            <div className="cardicon">
              <img
                src="https://app-cdn.clickup.com/blank-wiki.8aaa0583e7135e2d04571812c0b8285f.svg"
                alt="cardicon1"
              />
            </div>
            <div className="carddetails">
              <h3>Company Wiki</h3>
              <p>All-in-one wiki</p>
            </div>
          </div>
          <div className="secondwiki">
            <div className="cardicon">
              <img
                src="https://app-cdn.clickup.com/company-home.e805ec42a0c4a14c55c1e8500534c819.svg"
                alt="cardicon2"
              />
            </div>
            <div className="carddetails">
              <h3>Company Home</h3>
              <p>Company interact hub</p>
            </div>
          </div>
          <div className="thirdwiki">
            <div className="cardicon">
              {" "}
              <img
                src="https://app-cdn.clickup.com/knowledge-base.1b8b9a509a3d70e3587e559c6cd4bb72.svg"
                alt="cardicon3"
              />
            </div>
            <div className="carddetails">
              <h3>Knowledge Base</h3>
              <p>Company Knowledge Center</p>
            </div>
          </div>
          <div className="fourthwiki">
            <div className="cardicon">
              {" "}
              <img
                src="https://app-cdn.clickup.com/team-hub.2a04aebcc17cad83bc7d90ca7d2d4a7d.svg"
                alt="cardicon4"
              />
            </div>
            <div className="carddetails">
              <h3>Team Hub</h3>
              <p>Team Collaboration center</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
