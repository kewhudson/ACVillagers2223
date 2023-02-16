import React from "react";
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";
import style from "./VillagerCard.module.css";
import {NavLink} from "react-router-dom";



function VillagerCard(props) {
    const {nome, ID, immagine, specie} = props;

    return(
       <NavLink to={`/RegistryOffice/${ID}`}>
            <Card>
                <CardImg top width="100%" src={immagine} alt={nome}/>
                <CardBody className="text-center">
                    <CardTitle tag="h5" className={'h3'}>{nome}</CardTitle>
                    <CardText>
                        {ID}
                    </CardText>
                    <div>
                        {specie}
                    </div>
                </CardBody>
            </Card>
        </NavLink>
    )
}

export default VillagerCard;