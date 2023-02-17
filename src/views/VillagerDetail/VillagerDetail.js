import React, {useEffect, useState} from "react";
import {NavLink, useParams} from "react-router-dom";
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";
import style from "../../components/VillagerCard/VillagerCard.module.css";


function VillagerDetail(props) {
    const {nome, ID, image_uri, specie} = props;

    let {number} = useParams();
    let villagerID = parseInt(number);

    const [villagerData, setVillagerData] = useState([]);


    /* API CALL */
    useEffect(() => {

        let isMounted = true;

        fetch(`https://acnhapi.com/v1/villagers/${villagerID}`)
            .then(res => res.json())
            .then(res => {
                if (isMounted)
                    setVillagerData(res);
            })
            .catch((error) => console.log("Error" + error));
        return () => {
            isMounted = false;
        }
    }, [villagerID]);
    /* FINE API CALL */

    return (
        <div>
            {villagerData.length === 0 &&
                <div className={"text-center"}>
                    <h1>Sto per visualizzare il Villager #{villagerID}</h1>
                    <h2>CARICAMENTO CARICAMENTO CARICAMENTO</h2>
                </div>
            }


            {villagerData.length !== 0 &&
                <>
                <NavLink to={`/RegistryOffice/${ID}`}>
                    <Card>
                        <CardImg top width="100%" src={villagerData.image_uri} alt={nome} className={style.img}/>
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
                </>
            }



        </div>
/* <img src={villagerData.image_uri}/> */

    )
}

export default VillagerDetail;