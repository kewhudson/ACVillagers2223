import React from "react";
import MainTemplate from "../../components/MainTemplate/MainTemplate";
import Home from "../Home/Home";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Info from "../Info/Info";
import RegistryOffice from "../RegistryOffice/RegistryOffice";
import VillagerDetail from "../VillagerDetail/VillagerDetail";
import LogoNavBar from "../../assets/img/Animal_Crossing_Leaf.svg";
import NotFound from "../NotFound/NotFound";
import ScrollToTop from "../../ScrollToTop";

function App() {

  const nav = [
    {url: "/", text: "Home", exact: true},
    {url: "/RegistryOffice", text: "Abitanti", exact: false},
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

             <ScrollToTop>
           <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/RegistryOffice" element={<RegistryOffice />} />
             <Route path="/Info" element={<Info />}/>
             <Route path="/RegistryOffice/:number" element={<VillagerDetail />}/>
             <Route path="*" element={<NotFound />} />
           </Routes>
             </ScrollToTop>

         </MainTemplate>
      </BrowserRouter>
  );
}

export default App;
