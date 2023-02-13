import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function MainTemplate(props) {
    const {children, footerCourseName, footerCourseLink} = props;
    return(
        <>
        <Header />
            {children}
        <Footer
        courseName = {footerCourseName}
        courseLink = {footerCourseLink}
        />
        </>
    )
}

export default MainTemplate;