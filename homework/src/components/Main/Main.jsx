import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Main.css";
import AgentView from "./AgentView/AgentView";
import OtherView from "./OtherView/OtherView";
import Navigation from "./Navigation/Navigation";

function Main() {
  const navigationState = useSelector(
    (state) => state.navigation.isNavigationShow
  );
  return (
    <BrowserRouter>
      <main className="main">
        {navigationState && <Navigation />}
        <Routes>
          <Route path="/" element={<AgentView />} />
          <Route path="/agent" element={<AgentView match="agent" />} />
          <Route path="/dashboard" element={<OtherView match="dashboard" />} />
          <Route path="/my cruise" element={<OtherView match="my cruise" />} />
          <Route path="/help" element={<OtherView match="help" />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default Main;
