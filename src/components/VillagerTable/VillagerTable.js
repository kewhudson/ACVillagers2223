import React from "react";
import {NavLink} from "react-router-dom";
import style from "./VillagerTable.module.css"
import speciesTranslation from "../SpeciesTranslation/SpeciesTranslation";

function VillagerTable(props) {
    const {VillagerList} = props;

    const villagerTable = [];

    for(let villager = 0; villager < VillagerList.length; villager ++){
        villagerTable.push(
            <tr key={villager+1} className="d-flex flex-wrap justify-content-around align-items-center">

                    <td>
                        <NavLink to={`/RegistryOffice/${villager+1}`}>
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
                            <img src={VillagerList[villager]['icon_uri']}/>
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
        <div className={style.table}>
        <table className="d-flex flex-column" >
            <thead className="mb-2 mt-5 px-4">
            <tr className="d-flex flex-wrap justify-content-around">
                <th>ID</th>
                <th>Nome</th>
                <th>Immagine</th>
                <th className="allineamento">Specie</th>
            </tr>
            </thead>
            <tbody className="my-4 px-4">
            {villagerTable}
            </tbody>
        </table>
        </div>
    );
}

export default VillagerTable;