import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import style from "./VillagerDetail.module.css";
import speciesTranslation from "../../functions/SpeciesTranslation";
import personalitiesTranslation from "../../functions/PersonalitiesTranslation";
import genderTranslation from "../../functions/GenderTranslation";


function VillagerDetail() {

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
        /*METTERE LOGO DI CARICAMENTO*/
        <div>
            {villagerData.length === 0 &&
                <div className={"text-center"}>
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
                                <img src={villagerData['image_uri']} className={style['imgPolaroid']} alt={villagerData.name}/>
                                </div>
                            </div>

                            <div className="col-7">
                                <h1 style={{color: villagerData['bubble-color']}} className='fw-bold'> {villagerData['name']['name-EUit']}</h1>

                                <ul>
                                    <li> <span className='fw-bold'>Specie:</span> {speciesTranslation(villagerData['species'])}</li>
                                    <li> <span className='fw-bold'>Compleanno</span>: {villagerData['birthday']}</li>
                                    <li> <span className='fw-bold'>Genere:</span> {genderTranslation(villagerData['gender'])} </li>
                                    <li> <span className='fw-bold'>Personalità:</span> {personalitiesTranslation(villagerData['personality'])} </li>
                                </ul>

                            </div>
                        </div>

                        <div className="row border">
                            <div className="col">

                                <p><span className='fw-bold'>Motto:</span> {villagerData['catch-translations']['catch-EUit']}</p>
                                <p><span className='fw-bold'>La sua citazione:</span> "{villagerData['saying']}"</p>

                            </div>
                        </div>

                    </div>

            }



        </div>
/* <img src={villagerData.image_uri}/> */

    )
}

export default VillagerDetail;