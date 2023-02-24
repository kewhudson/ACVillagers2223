import React, {useEffect, useState} from "react";
import {NavLink, useParams} from "react-router-dom";
import style from "./VillagerDetail.module.css";
import speciesTranslation from "../../functions/SpeciesTranslation";
import personalitiesTranslation from "../../functions/PersonalitiesTranslation";
import genderTranslation from "../../functions/GenderTranslation";
import itemIcon from "../../assets/img/star_icon.svg";

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
    <>
        {(villagerID < 0 || villagerID > 391) ?
                <div className='text-center'>
                    <h3 className='mx-2 mb-5'>Ci sono solo 391 abitanti!</h3>
                    <NavLink className="button mb-4 fw-bold" to="/RegistryOffice">Torna alla lista degli abitanti</NavLink>
                </div> :

                <>
                    {villagerData.length !== 0 ?
                            <div className="container">

                                <div className={style.navigation}>

                                    {villagerID - 1 !== 0 &&
                                        <NavLink className={`fw-bold ${style.prev}`}
                                                 to={`/RegistryOffice/${villagerID - 1}`}>&lt;</NavLink>
                                    }

                                    {villagerID + 1 <= 391 &&
                                        <NavLink className={`${style.next}`}
                                                 to={`/RegistryOffice/${villagerID + 1}`}>Next &gt;</NavLink>
                                    }

                                </div>




                                <div className="row  align-items-center mt-4">
                                    <div className="col-2 col-xs-0">
                                        {villagerID - 1 !== 0 &&
                                        <NavLink className={`${style.prev} ${style.navItem}`}
                                                 to={`/RegistryOffice/${villagerID - 1}`}>&lt;</NavLink>
                                    }
                                    </div>


                                    <div className="col-md-3 d-flex justify-content-center">
                                        <div className={style.polaroid} /*style={{background: villagerData["bubble-color"]}}*/>
                                        <img src={villagerData['image_uri']} className={style.imgPolaroid} alt={villagerData['name']}/>
                                        </div>
                                    </div>

                                    <div className="col-1 "> </div>

                                    <div className="col-sm-8 col-md-4 d-flex flex-column justify-content-center ps-5 pt-3 pt-sm-0 ms-sm-3 ps-sm-5 ms-md-0 ps-md-0">
                                        <h2 className="fw-bold ms-5"> {villagerData['name']['name-EUit']}</h2>

                                        <ul className={style.caratteristiche}>
                                            <li> <img src={itemIcon} className={style.starIcon} alt='star icon'/> <span className='fw-bold'>Specie:</span> {speciesTranslation(villagerData['species'])}</li>
                                            <li> <img src={itemIcon} className={style.starIcon} alt='star icon'/> <span className='fw-bold'>Compleanno</span>: {villagerData['birthday']}</li>
                                            <li> <img src={itemIcon} className={style.starIcon} alt='star icon'/> <span className='fw-bold'>Genere:</span> {genderTranslation(villagerData['gender'])} </li>
                                            <li> <img src={itemIcon} className={style.starIcon} alt='star icon'/> <span className='fw-bold'>Personalità:</span> {personalitiesTranslation(villagerData['personality'])} </li>
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
                            <h3 className='text-center px-5 mx-5'>Si è verificato un errore con il reperimento da API o non hai inserito un valore numerico</h3>
                        }
                        </div>
                    }
                </>
        }
    </>
    )
}

export default VillagerDetail;