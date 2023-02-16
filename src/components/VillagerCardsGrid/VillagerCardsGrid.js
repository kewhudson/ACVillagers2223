import React from "react";
import VillagerCard from "../VillagerCard/VillagerCard";


function VillagerCardsGrid(props) {
    const {VillagerList, col} = props;

    const villagerCardsGrid = [];

    for(let villager = 0; villager < 391; villager ++){
        villagerCardsGrid.push(
            <div key={villager+1} className="col">
                <VillagerCard
                    nome ={VillagerList[villager]['name']['name-EUit']}
                    ID ={VillagerList[villager]['id']}
                    immagine ={VillagerList[villager]['icon_uri']}
                    specie ={VillagerList[villager]['species']}
                />
            </div>
        );
    }


    return(
        <div className={`row 
                row-cols-${col.xs}
                row-cols-sm-${col.sm}
                row-cols-md-${col.md}
                row-cols-lg-${col.lg}
                row-cols-xl-${col.xl}
        `}>
            {villagerCardsGrid}
        </div>
    )
}



export default VillagerCardsGrid;