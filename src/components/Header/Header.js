import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
} from 'reactstrap';
import {NavLink as RouterLink} from "react-router-dom";
import style from "./Header.module.css";

function Header(args) {
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
                <NavbarBrand>
                    <RouterLink to="/">
                        <img className={style.logo} src={logo} alt=""/>
                    </RouterLink>
                </NavbarBrand>

                <NavbarToggler onClick={toggle} />

                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        {itemList}
                    </Nav>

                </Collapse>
                </div>
            </Navbar>
        </div>
    );
}

export default Header;