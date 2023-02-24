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
    const [apiError, setApiError] = useState(false);

    /* API CALL */
    useEffect(() => {

        let isMounted = true;

        fetch(`https://acnhapi.com/v1/villagers/${villagerID}`)
            .then(res => res.json())
            .then(res => {
                if (isMounted) {
                    setApiError(false);
                    setVillagerData(res);
                }
            })
            .catch((error) => {
                console.log("Error" + error)
                setApiError(true);
            });
        return () => {
            isMounted = false;
        }
    }, [villagerID]);
    /* FINE API CALL */

    return (
        <div>

            {villagerData.length !== 0 ?
                    <div className="container">
                        <div className="row  align-items-center mt-4">
                            <div className="col-2 col-xs-0"> </div>


                            <div className="col-md-3 d-flex justify-content-center">
                                <div className={style.polaroid} style={{background: villagerData["bubble-color"]}}>
                                <img src={villagerData['image_uri']} className={style.imgPolaroid} alt={villagerData['name']}/>
                                </div>
                            </div>

                            <div className="col-1 "> </div>

                            <div className="col-md-4 d-flex flex-column justify-content-center ps-5 ms-sm-5 ps-sm-5 ms-md-0 ps-md-0">
                                <h2 className="fw-bold "> {villagerData['name']['name-EUit']}</h2>

                                <ul className={style.caratteristiche}>
                                    <li className={style.cuore}> <span className='fw-bold'>Specie:</span> {speciesTranslation(villagerData['species'])}</li>
                                    <li className={style.cuore}> <span className='fw-bold'>Compleanno</span>: {villagerData['birthday']}</li>
                                    <li className={style.cuore}> <span className='fw-bold'>Genere:</span> {genderTranslation(villagerData['gender'])} </li>
                                    <li className={style.cuore}> <span className='fw-bold'>Personalità:</span> {personalitiesTranslation(villagerData['personality'])} </li>
                                </ul>

                            </div>

                            <div className="col-2"> </div>

                        </div>

                        <div className="row mt-3">
                            <div className="col d-flex flex-column align-items-center">
                                <div className={style.thought}> <p className="text-center"><span className='fw-bold'>Motto:</span> {villagerData['catch-translations']['catch-EUit']}</p>  </div>
                                <p  className="text-center mt-4"><span className='fw-bold'>La sua citazione:</span> "{villagerData['saying']}"</p>
                            </div>

                        </div>

                    </div> :
                <div>
                {
                    apiError === false ?
                        <div className={"text-center"}>
                            <h1>Sto per visualizzare il Villager #{villagerID}</h1>
                            <img src={require("../../assets/img/loading.gif")} alt="Loading icon" className="w-25"/>
                        </div>
                    :
                    <h3 className='text-center'>Si è verificato un errore con il reperimento da API</h3>
                }
                </div>
            }

        </div>
    )
}

export default VillagerDetail;