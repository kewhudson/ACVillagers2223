import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';
import {NavLink as RouterLink} from "react-router-dom";
import style from "./Header.module.css";

const Header = (props) => {
    const {logo, navItems} = props;
    
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const itemList = navItems.map((item) => {
        return (
            <NavItem key={item.url} className={style.navItem}>
                <RouterLink exact={item.exact}
                            activeClassName={style.active}
                            to={item.url}
                            className="nav-link">
                    {item.text}
                </RouterLink>

            </NavItem>
        )
    });

    return (
        <div className={style.navBar}>

            <Navbar expand="md" light>
                <NavbarBrand>
                    <RouterLink to="/">
                        <img className={style.logo} src={logo} alt="Logo AC"/>
                    </RouterLink>
                </NavbarBrand>

                <NavbarToggler onClick={toggle} />

                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mx-auto" navbar>
                        {itemList}
                    </Nav>
                </Collapse>
            </Navbar>

        </div>
    );
}

export default Header;

/*
<nav class="navbar navbar-expand-lg">
    <div class="container-fluid container-xxl">
        <a class="navbar-brand navbarDesktopBrand" href="index.html">
            <img src="img/logo-f4n-frigorifero-frutta.png" alt="Logo Fridge for Nature completo" class="d-inline-block align-text-top logoNavBar2023">
        </a>
        <a class="navbar-brand navbarMobileBrand" href="index.html">
            <img src="img/logo-f4n-solo-frigorifero.png" alt="Logo Fridge for Nature solo frigorifero" class="d-inline-block align-text-top logoNavBar2023Img">
        </a>
        <ul class="navbar-nav mx-auto navbarMobileBrand">
            <li class="nav-item d-flex align-items-center justify-content-center">
                <a class="navbar-brand" href="index.html">
                    <img src="img/logo-f4n-solo-testo.png" alt="Logo Fridge for Nature solo testo" class="d-inline-block align-text-top logoNavBar2023Text">
                </a>
            </li>
        </ul>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto" id="firstNavBarItem">
                <li class="nav-item menuMiddleComponent mx-2">
                    <a class="nav-link active" aria-current="page" href="index.html" ><img src="img/navbar/lemon.png" alt="Lemon Icon">HOME</a>
                </li>
                <li class="nav-item menuMiddleComponent mx-2">
                    <a class="nav-link" href="1_mission.html"><img src="img/navbar/pear.png" alt="Pear Icon">MISSION</a>
                </li>
                <li class="nav-item menuMiddleComponent mx-2">
                    <a class="nav-link" href="2_app.html"><img src="img/navbar/pineapple.png" alt="Pineapple Icon">APP</a>
                </li>
                <li class="nav-item menuMiddleComponent mx-2">
                    <a class="nav-link" href="3_blog.html"><img src="img/navbar/watermelon.png" alt="Watermelon Icon">BLOG</a>
                </li>
                <li class="nav-item menuMiddleComponent mx-2">
                    <a class="nav-link" href="4_adotta-albero.html"><img src="img/navbar/broccoli.png" alt="Broccoli Icon">ADOTTA ALBERO</a>
                </li>
                <li class="nav-item menuMiddleComponent mx-2">
                    <a class="nav-link" href="5_about-us.html"><img src="img/navbar/peach.png" alt="Peach Icon">ABOUT US</a>
                </li>
            </ul>
            <ul class="navbar-nav mx-end">
                <li class="nav-item user">
                    <a class="nav-link active" href="#"><img src="img/navbar/userIconDark.svg" width="25" height="25" id="userIcon" alt="User Icon"></a>
                </li>
            </ul>
        </div>

    </div>
</nav>
*/