import HeaderBlock from "./components/header/HeaderBlock";
import Menu from "./components/navigation/Menu";
import AnalyticsPage from "./components/pages/AnalyticsPage";
import Sidebar from "./components/navigation/Sidebar";
import React from "react";


const App = () => {
  return (
        <div id="outer-container" >
            <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
            <HeaderBlock/>
            <Menu/>
            <AnalyticsPage/>
        </div>
  );
};

export default App;
