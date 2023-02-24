import React from "react";
import {NavLink} from "react-router-dom";
import style from "./VillagerTable.module.css"
import speciesTranslation from "../../functions/SpeciesTranslation";

function VillagerTable(props) {
    const {VillagerList} = props;

    const villagerTable = [];

    for(let villager = 0; villager < VillagerList.length; villager ++){
        villagerTable.push(
            <tr key={villager+1} className="d-flex flex-wrap justify-content-around align-items-center text-center">

                    <td className="text-center">
                        <NavLink to={`/RegistryOffice/${villager+1}`} >
                            {VillagerList[villager]['id']}
                        </NavLink>
                    </td>
                    <td>
                        <NavLink to={`/RegistryOffice/${villager+1}`}>
                            {VillagerList[villager]['name']['name-EUit']}
                        </NavLink>
                    </td>
                    <td>
                        <NavLink to={`/RegistryOffice/${villager+1}`}>
                            <img src={VillagerList[villager]['icon_uri']} className={style.villagerIcon}/>
                        </NavLink>
                    </td>
                    <td>
                        <NavLink to={`/RegistryOffice/${villager+1}`}>
                            {speciesTranslation(VillagerList[villager]['species'])}
                        </NavLink>
                    </td>
            </tr>
        );
    }

    return (

        <div className={style.tableBC}>
        <table className="d-flex flex-column" >
            <thead>
            <tr className="mt-5 mb-2 d-flex flex-wrap justify-content-around text-center">
                <th>ID</th>
                <th>Nome</th>
                <th>Immagine</th>
                <th>Specie</th>
            </tr>
            </thead>
            <tbody className="my-2">
            {villagerTable}
            </tbody>
        </table>
        </div>

    );
}

export default VillagerTable;