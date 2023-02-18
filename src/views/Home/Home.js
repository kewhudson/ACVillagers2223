import React from "react";
import villagerPreferiti from "../../assets/data/villagerBaseData.json"
import VillagerCardsGrid from "../../components/VillagerCardsGrid/VillagerCardsGrid";
import {NavLink} from "react-router-dom";
import BirthdayList from "../../components/BirthdayList/BirthdayList";

function Home() {
    return (
        <div className="container">
             <div className="row justify-content-center">
                 <div className="col">
                     <h1 className='text-center'>Ti presentiamo i nostri Abitanti preferiti</h1>

                     <VillagerCardsGrid
                         VillagerList={Object.values(villagerPreferiti)}
                         col={{xs: 1, sm: 2, md: 2, lg: 3, xl: 3}}
                     />

                     <NavLink className="button" to="/RegistryOffice">Guarda l'elenco completo</NavLink>

                     <h1 className='text-center'>Oggi è il compleanno di: </h1>

                     <BirthdayList />
                 </div>
             </div>
        </div>
    )
}

export default Home;