import React from "react";
import MainTemplate from "../../components/MainTemplate/MainTemplate";
import Home from "../Home/Home";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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

           <Routes>
             <Route path="/" component={Home} />
             <Route path="/RegistryOffice" component={RegistryOffice} />
             <Route path="/Info" component={Info}/>
             <Route path="/RegistryOffice/:number" component={VillagerDetail}/>
           </Routes>

         </MainTemplate>
      </BrowserRouter>
  );
}

export default App;
