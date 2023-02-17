import React from "react";
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";
import style from "./VillagerCard.module.css";
import {NavLink} from "react-router-dom";



function VillagerCard(props) {
    const {nome, ID, immagine, specie} = props;

    return(
       <NavLink to={`/RegistryOffice/${ID}`}>
            <Card className={style.CardVillager}>
                <CardImg top width="100%" src={immagine} alt={nome} className={style.img}/>
                <CardBody className="text-center">
                    <CardTitle tag="h5" className={'h2'}>{nome}</CardTitle>
                    <CardText className="fw-bold">
                        {ID}

                    </CardText>
                    <div className="fw-bold">
                        {specie}
                    </div>
                </CardBody>
            </Card>
        </NavLink>
    )
}

export default VillagerCard;