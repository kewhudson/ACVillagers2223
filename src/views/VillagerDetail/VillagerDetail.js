import React from "react";

function VillagerDetail(props) {

    const  {match} = props;
    return (
        <div>
            Sto visualizzando il Villager #{match.params.number}
        </div>
    )
}

export default VillagerDetail;