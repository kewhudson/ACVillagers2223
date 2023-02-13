import React from "react";
import MainTemplate from "../../components/MainTemplate/MainTemplate";
import Home from "../Home/Home";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Info from "../Info/Info";
import RegistryOffice from "../Registry office/RegistryOffice";
import VillagerDetail from "../Villager Detail/VillagerDetail";
import Logo from "../../assets/img/Animal_Crossing_Leaf.svg";

function App() {

  const nav = [
    {url: "/", text: "Home", exact: true},
    {url: "/registryOffice", text: "RegistryOffice", exact: false},
    {url: "/info", text: "Info", exact: true}
  ];

  return (
      <BrowserRouter>
         <MainTemplate
              footerCourseName = "App Web: Progettazione e Sviluppo"
              footerCourseLink = "https://elearning.unimib.it/course/view.php?id=44672"
              navItems={nav}
              logo={Logo}
          >


           <Switch>
             <Route exact path="/" component={Home} />
             <Route exact path="/RegistryOffice" component={RegistryOffice} />
             <Route exact path="/Info" component={Info}/>
             <Route exact path="/RegistryOffice/:number" component={VillagerDetail}/>
           </Switch>

             <Home/>

         </MainTemplate>
      </BrowserRouter>
  );
}

export default App;
