import React, {useEffect, useState} from "react";
import VillagerBaseData from "../../assets/data/villagerBaseData.json";

function RegistryOffice() {

    const [villagerData, setVillagerData] = useState([]);

    useEffect(() => {
        let isMounted = true;

        fetch(`https://acnhapi.com/v1/villagers`)
            .then(res => res.json())
            .then(res => {
                if (isMounted)
                    setVillagerData(res);
            })
            .catch((error) => console.log("Error" + error));
        return () => {
            isMounted = false;
        }
    }, []);

    return (
        <div>
            <h1 className={'pb-5'}>Registry Office</h1>
            <h1>{Object.values(VillagerBaseData)[4]['name']['name-EUit']}</h1>


            {villagerData.length !== 0 &&
                <>
                    <h1>{Object.values(villagerData)[4]['name']['name-EUit']}</h1>
                </>
            }

        </div>
    )
}

/*villagerData.map(()=>{
                    return(
                <li>
            {Object.values(VillagerBaseData)[x]['name']['name-USen']}
                </li>)
            })*/


export default RegistryOffice;