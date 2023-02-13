import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function MainTemplate(props) {
    const {footerCourseName, footerCourseLink} = props;
    return(
        <>
        <Header />

        <Footer
        courseName = {footerCourseName}
        courseLink = {footerCourseLink}
        />
        </>
    )
}

export default MainTemplate;