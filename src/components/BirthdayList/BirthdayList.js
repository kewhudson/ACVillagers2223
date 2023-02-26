import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import speciesTranslation from "../../functions/SpeciesTranslation";
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";
import style from "./BirthdayList.module.css";

function BirthdayList() {

    const date = new Date();

    const [birthdayData, setBirthdayData] = useState([]);
    const [apiError, setApiError] = useState(false);

    let birthdayTemp = [];

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let currentDate = ""+ day +"/"+month;

    /* API CALL */
    useEffect(() => {
        let isMounted = true;
        fetch(`https://acnhapi.com/v1/villagers/`)
            .then(res => res.json())
            .then(res => {
                if (isMounted){
                    setApiError(false);
                    for(let villager = 0; villager < Object.values(res).length; villager ++){
                        if(Object.values(res)[villager]['birthday'] === currentDate){
                            birthdayTemp.push(
                                <NavLink to={'/RegistryOffice/'+ Object.values(res)[villager]["id"]} className="mx-auto">
                                    <Card className={style.CardVillager}>
                                        <CardImg top width="100%" src={Object.values(res)[villager]['icon_uri']} alt={Object.values(res)[villager]['name']['name-EUit']} className={style.img}/>
                                        <CardBody className="text-center">
                                            <CardTitle tag="h5" className={'h2'}>{Object.values(res)[villager]['name']['name-EUit']}</CardTitle>
                                            <CardText className="fw-bold">
                                                {Object.values(res)[villager]['id']}
                                            </CardText>
                                            <div className="fw-bold">
                                                {speciesTranslation(Object.values(res)[villager]['species'])}
                                            </div>
                                        </CardBody>
                                    </Card>
                                </NavLink>
                            );
                        }
                    }
                    if (birthdayTemp.length === 0){
                        birthdayTemp.push(<h2>Sembra che oggi nessuno compia gli anni!</h2>);
                    }
                    setBirthdayData(birthdayTemp);
                }
            })
            .catch((error) =>
            {
                console.log("Error" + error)
                setApiError(true);
            });
        return () => {
            isMounted = false;
        }
    }, []);
    /* FINE API CALL */



    return(
        <>
            <h1 className='text-center'>Oggi è il compleanno di: </h1>
            {
                    birthdayData.length !== 0 ?
                        <div className={`row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 mt-4`}>
                            {birthdayData}
                        </div>
                        :
                        <div>
                    {
                        apiError === false ?
                        <div className={"text-center"}>
                            <img src={require("../../assets/img/loading.gif")} alt="Loading icon" className="w-25"/>
                        </div>
                        :
                        <h3 className='text-center'>Si è verificato un errore con il reperimento da API</h3>
                    }
                        </div>
            }

        </>

    )


}

export default BirthdayList;



/*<NavLink to={'/RegistryOffice/'+ Object.values(res)[villager]["id"]}>
                                    <h1>{Object.values(res)[villager]['name']['name-EUit']}</h1>
                                </NavLink>
                                <VillagerCard
                                        nome ={res[villager]['name']['name-EUit']}
                                        ID ={res[villager]['id']}
                                        immagine ={res[villager]['icon_uri']}
                                        specie = {speciesTranslation(res[villager]['species'])}
                                    />*/