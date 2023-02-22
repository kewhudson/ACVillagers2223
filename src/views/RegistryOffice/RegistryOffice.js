import React, {useEffect, useState} from "react";
import VillagerCardsGrid from "../../components/VillagerCardsGrid/VillagerCardsGrid";
import VillagerTable from "../../components/VillagerTable/VillagerTable";
import style from "./RegistryOffice.module.css";
import clsx from "clsx";

function RegistryOffice() {

    const [displayGrid, setDisplayGrid] = useState("true");
    const [villagerData, setVillagerData] = useState([]);
    const [apiError, setApiError] = useState(false);


    /* API CALL */
    useEffect(() => {

        let isMounted = true;

        fetch(`https://acnhapi.com/v1/villagers/`)
            .then(res => res.json())
            .then(res => {
                if (isMounted){
                    setApiError(false);
                    setVillagerData(res);
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



    return (
        <div className="container">

            <div className="row justify-content-center">
                <div className="col">

                    <div className={style.switch}>
                     <div className={clsx(style.option, { [style.active]: displayGrid})}
                         onClick={() => setDisplayGrid(true)}>
                         Griglia
                     </div>
                    <div className={clsx(style.option, {[style.active]: !displayGrid})}
                        onClick={() => setDisplayGrid(false)}>
                        Tabella
                    </div>
                    </div>

                </div>
            </div>

            <div className="row justify-content-center">
                    {
                        villagerData.length !== 0 ?
                            <div className="col">

                                {
                                    displayGrid ?
                                        <VillagerCardsGrid
                                            VillagerList={Object.values(villagerData)}
                                            col={{xs: 1, sm: 2, md: 3, lg: 4, xl: 5}}
                                        /> :
                                        <VillagerTable VillagerList={Object.values(villagerData)}/>
                                }
                            </div> :
                            /*METTERE LOGO DI CARICAMENTO*/
                            <div>
                                {   apiError === false ?
                                    <h1>ATTENDI</h1>
                                    :
                                    <h3 className='text-center'>Si è verificato un errore con il reperimento da API</h3>
                                }
                            </div>
                    }
            </div>

        </div>

    )

}

export default RegistryOffice;