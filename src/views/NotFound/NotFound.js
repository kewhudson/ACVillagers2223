import React from "react";
import Resetti from "../../assets/img/resetti-not-found.png";
import DonResetti from "../../assets/img/don-resetti.png";
import style from "./NotFound.module.css"
import {NavLink} from "react-router-dom";

function NotFound() {
    return (
        <div className='container text-center'>
            <NavLink to="/"><img src={Resetti} alt="Resetti con in mano un piccone" className={style.imgMr}/></NavLink>
            <h1>Sei finito nella pagina 404</h1>
            <h2 className="mb-5">Quante volte ti ho detto di non uscire dalle rotte?!</h2>
            <NavLink className="button mt-3 mb-3 fw-bold" to="/">Torna alla Home</NavLink>
            <NavLink to="/"><img src={DonResetti} alt="Don Resetti che si gratta la testa" className={style.imgDon}/></NavLink>

        </div>
    )
}

export default NotFound;