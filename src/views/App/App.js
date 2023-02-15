import React from "react";
import MainTemplate from "../../components/MainTemplate/MainTemplate";
import Home from "../Home/Home";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Info from "../Info/Info";
import RegistryOffice from "../RegistryOffice/RegistryOffice";
import VillagerDetail from "../VillagerDetail/VillagerDetail";
import LogoNavBar from "../../assets/img/Animal_Crossing_Leaf.svg";

function App() {

  const nav = [
    {url: "/", text: "Home", exact: true},
    {url: "/RegistryOffice", text: "RegistryOffice", exact: false},
    {url: "/Info", text: "Info", exact: true}
  ];

  return (
      <BrowserRouter>
         <MainTemplate
              footerCourseName = "App Web: Progettazione e Sviluppo"
              footerCourseLink = "https://elearning.unimib.it/course/view.php?id=44672"
              navItems={nav}
              logo={LogoNavBar}
          >

           <Switch>
             <Route exact path="/" component={Home} />
             <Route exact path="/RegistryOffice" component={RegistryOffice} />
             <Route exact path="/Info" component={Info}/>
             <Route exact path="/RegistryOffice/:number" component={VillagerDetail}/>
           </Switch>

         </MainTemplate>
      </BrowserRouter>
  );
}

export default App;
