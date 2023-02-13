import React from "react";
import MainTemplate from "../../components/MainTemplate/MainTemplate";
import Home from "../Home/Home";

function App() {
  return (
    <MainTemplate
    footerCourseName = "App Web: Progettazione e Sviluppo"
    footerCourseLink = "https://elearning.unimib.it/course/view.php?id=44672"
    >
      <Home/>
    </MainTemplate>
  );
}

export default App;
