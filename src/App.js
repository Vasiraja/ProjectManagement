import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

 import { InboxComponent } from "./InboxComponent";
import { HomeComponent } from "./HomeComponent";
import { Navbarup } from "./Navbarup";
import { SideNavbar } from "./SideNavbar";
import "./App.css";
import { DocsComponent } from "./DocsComponent";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbarup />
        <SideNavbar />
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/inbox" element={<InboxComponent />} />
          <Route path="/docs" element={<DocsComponent/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
