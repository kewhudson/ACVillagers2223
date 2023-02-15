import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import {NavLink as RouterLink} from "react-router-dom";
import style from "./Header.module.css";

function Header(props) {
    const {logo, navItems} = props;
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const itemList = navItems.map((item) => {
        return (
            <NavItem key={item.url} className={style.navItem}>
                <RouterLink exact={item.exact}
                            activeClassName={style.active}
                            to={item.url}
                            className={"nav-link"}>
                    {item.text}
                </RouterLink>

            </NavItem>
        )
    });

    return (
        <div className={style.navBar}>

            <Navbar expand="md" full light>
                <div className="container">


                    <RouterLink to="/">
                        <img className={style.logo} src={logo} alt="Logo AC"/>
                    </RouterLink>


                <NavbarToggler onClick={toggle} />

                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mx-auto" navbar>
                        {itemList}
                    </Nav>
                </Collapse>
                </div>
            </Navbar>
        </div>
    );
}

export default Header;