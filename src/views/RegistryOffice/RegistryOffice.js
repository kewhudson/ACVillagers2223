import React, {useEffect, useState} from "react";
import VillagerBaseData from "../../assets/data/villagerBaseData.json";
import VillagerCardsGrid from "../../components/VillagerCardsGrid/VillagerCardsGrid";
import VillagerTable from "../../components/VillagerTable/VillagerTable";
import style from "./RegistryOffice.module.css";
import clsx from "clsx";

function RegistryOffice() {
    const [displayGrid, setDisplayGrid] = useState("true");

    return (
        <div className="container">

            <div className="row justify-content-center">
                <div className="col">

                    <div className={style.switch}>
                     <div className={clsx(style.option, { [style.active]: displayGrid})}
                         onClick={() => setDisplayGrid(true)}>
                         Grid
                     </div>
                    <div className={clsx(style.option, {[style.active]: !displayGrid})}
                        onClick={() => setDisplayGrid(false)}>
                        Table
                    </div>
                    </div>

                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col">

                    {
                        displayGrid ?
                            <VillagerCardsGrid
                                VillagerList={VillagerBaseData}
                                col={{xs:1, sm:2, md:3, lg:4, xl:5}}
                            /> :
                            <VillagerTable VillagerList={VillagerBaseData}/>
                    }

                </div>
            </div>

        </div>

    )

}







    /* const [villagerData, setVillagerData] = useState([]);

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

 villagerData.map(()=>{
                     return(
                 <li>
             {Object.values(VillagerBaseData)[x]['name']['name-USen']}
                 </li>)
             })*/


export default RegistryOffice;