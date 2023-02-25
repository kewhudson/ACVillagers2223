import React from "react";
import unimib from "../../assets/img/logo-unimib.png";
import disco from "../../assets/img/logo-unimib-disco.png";
import style from "./Footer.module.css";
import  {NavLink} from "react-router-dom";
import footerImg from "../../assets/img/background-AC-Personaggi.jpg"

function Footer(props){
    const {courseName, courseLink, navItems} = props;

    const itemList= navItems.map((item) => {
        return (
            <li key={item.url} className="nav-item">
                <NavLink exact={item.exact}
                         activeClassName={style.active}
                         className={style.footerNavLink}
                         to={item.url}>
                    {item.text}
                </NavLink>
            </li>
        )
     });


    return(
        <footer className={style.footer}>
        <img src={footerImg} className={`mb-4 ${style.imgFooter}`} alt={'Personaggi di Animal Crossing'} />
        <div className="container-fluid">

            <div className="row">
                <div className="col-md-5">
                    {<nav className={style.footerNav}>
                        <ul className="nav flex-column">
                            {itemList}
                        </ul>
                    </nav>}
                </div>

                <div className="col-md-7">
                    <div className={`d-flex ${style.copyright}`}>
                        <div>
                            <a href={courseLink} target="_blank">
                                {courseName}
                            </a>
                        </div>
                        <div className={style.logo}>
                            <a href="https://www.disco.unimib.it/it" target="_blank">
                                <img src={disco} alt="Logo DISCO"/>
                            </a>
                        </div>
                        <div className={style.logo}>
                            <a href="https://www.unimib.it/" target="_blank">
                                <img src={unimib} alt="Logo UNIMIB"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </footer>
    )
}

export default Footer;