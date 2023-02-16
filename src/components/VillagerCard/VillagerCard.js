import React from "react";
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";
import style from "/VillagerCard.module.css";
import {zeroPad} from "../../Utility/utility";


/*
function VillagerCard(props) {
    const {nome, ID, immagine, specie} = props;

    return(
        <Card className={style.card}>
            <CardImg className={style.immagine} top width="100%" src={immagine} alt={nome}/>
            <CardBody className="text-center">
                <CardTitle tag="h5" className={'h3 ${style.title}'}> {nome}</CardTitle>
                <CardText>
                    #{zeroPad(ID, 3)}
                </CardText>
            </CardBody>
        </Card>
    )
}
 IDEM PANIKKKK */
export default VillagerCard;