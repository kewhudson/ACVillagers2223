import React from "react";
import unimib from "../../assets/img/logo-unimib.png";
import disco from "../../assets/img/logo-unimib-disco.png";
import style from "./Footer.module.css";

function Footer(props){
    const {courseName, courseLink} = props;
    return(
        <div className="container-fluid">

            <div className="row">

                <div className="col">
                    {/*<nav className={style.footerNav}>

                        <ul className="nav flex-column">
                            {itemList}
                        </ul>

                    </nav>*/}
                    NAVIGAZIONE - DA FARE

                </div>

                <div className="col-md-auto">

                    <div className={`d-flex ${style.copyright}`}>

                        <div id={style.course}>
                            <a href={courseLink} target="_blank">
                                {courseName}
                            </a>
                        </div>

                        <div id={style.disco} className={style.logo}>
                            <a href="https://www.disco.unimib.it/it" target="_blank">
                                <img src={disco} alt="Logo DISCO"/>
                            </a>
                        </div>

                        <div id={style.unimib} className={style.logo}>
                            <a href="https://www.unimib.it/" target="_blank">
                                <img src={unimib} alt="Logo UNIMIB"/>
                            </a>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Footer;