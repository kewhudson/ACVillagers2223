import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import style from "./VillagerDetail.module.css";


function VillagerDetail(props) {


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
                <div className={"text-center"}>                     /*METTERE LOGO DI CARICAMENTO*/
                    <h1>Sto per visualizzare il Villager #{villagerID}</h1>
                    <h2>CARICAMENTO CARICAMENTO CARICAMENTO</h2>
                </div>
            }


            {villagerData.length !== 0 &&
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-1"> </div>

                            <div className="col-3">
                                <div className={style.polaroid}>
                                <img src={villagerData.image_uri} className={style.imgPolaroid}/>
                                </div>
                            </div>

                            <div className="col-7">
                                <h2> {villagerData['name']['name-EUit']}</h2>

                                <ul>
                                    <li> Specie: {villagerData['species']}</li>
                                    <li> Compleanno: {villagerData['birthday']}</li>
                                    <li> Genere: {villagerData['gender']} </li>
                                    <li> Personalità: {villagerData['personality']} </li>
                                </ul>

                            </div>
                        </div>

                        <div className="row border">
                            <div className="col">

                                <p> Motto: {villagerData['catch-phrase']}</p>
                                <p> La sua citazione: "{villagerData['saying']}"</p>

                            </div>
                        </div>

                    </div>

            }



        </div>
/* <img src={villagerData.image_uri}/> */

    )
}

export default VillagerDetail;