import React, {useEffect, useState} from "react";
import {NavLink, useParams} from "react-router-dom";

function VillagerDetail() {

    let {number} = useParams();
    let villagerID = parseInt(number);

    const [villagerData, setVillagerData] = useState([]);

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

    return (
        <div>
            {villagerData.length === 0 &&
                <div className={"text-center"}>
                    <h1>Sto per visualizzare il Villager #{villagerID}</h1>
                    <h2>CARICAMENTO CARICAMENTO CARICAMENTO</h2>
                </div>
            }

            <img src={villagerData.image_uri}/>
        </div>


    )
}

export default VillagerDetail;