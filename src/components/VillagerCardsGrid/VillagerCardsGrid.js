import React from "react";
import VillagerCard from "../VillagerCard/VillagerCard";

/*
function VillagerCardsGrid(props) {
    const {VillagerList, col} = props;

    const VillagerCardsCol = VillagerList.map ((villager) => {
        return (
        <div key={villager.id} className="col">
            <VillagerCard
            nome={Object.values(VillagerList)[villager]['name']['name-EUit']}

            ID={Object.values(VillagerList)[villager]['id']}
            immagine={Object.values(VillagerList)[villager]['icon_uri']}
            specie={Object.values(VillagerList)[villager]['species']}
            />
        </div>
        )
    });

    return(
        <div className={'row row-cols-${col.xs} row-cols-sm-${col.sm} row-cols-md-${col.md} row-cols-lg-${col.lg} row-cols-xl-${col.xl}'}>
        {VillagerCardsCol}
            </div>
    )
}

IO CHE SCRIVO COSE NEL PANIK */

export default VillagerCardsGrid;