import React from "react";
import {NavLink} from "react-router-dom";

function VillagerTable(props) {
    const {VillagerList} = props;

    let villagerTable = [];
    for(let villager = 0; villager < 391; villager ++){
        villagerTable.push(
            <tr key={villager+1}>

                    <td>
                        <NavLink to={`/RegistryOffice/${villager+1}`}>
                            {Object.values(VillagerList)[villager]['id']}
                        </NavLink>
                    </td>
                    <td>
                        <NavLink to={`/RegistryOffice/${villager+1}`}>
                            {Object.values(VillagerList)[villager]['name']['name-EUit']}
                        </NavLink>
                    </td>
                    <td>
                        <NavLink to={`/RegistryOffice/${villager+1}`}>
                            <img src={Object.values(VillagerList)[villager]['icon_uri']}/>
                        </NavLink>
                    </td>
                    <td>
                        <NavLink to={`/RegistryOffice/${villager+1}`}>
                            {Object.values(VillagerList)[villager]['species']}
                        </NavLink>
                    </td>
            </tr>
        );
    };

    return (
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Immagine</th>
                <th>Specie</th>
            </tr>
            </thead>
            <tbody>
            {villagerTable}
            </tbody>
        </table>
    );
}

export default VillagerTable;