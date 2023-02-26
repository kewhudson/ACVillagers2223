import React from "react";
import villager from "../../assets/img/villager-reading.png"

function Info() {
    return (
            <div className='mt-3 text-center'>
                <img src={villager} alt='Animal Crossing Villager reading' className='mx-auto d-block mb-4' style={{width: 'clamp(125px, 20vw, 250px)'}}/>
                <a href='https://docs.google.com/document/d/1vbUiVxgUiebh982hgPb3ygAvJ5LV_yKkdbfUDMspws8/edit?usp=sharing' className="button fw-bold">Leggi la documentazione</a>
            </div>
    )
}

export default Info;