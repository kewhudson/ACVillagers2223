import React from "react";
import villager from "../../assets/img/villager-reading.png"

function Info() {
    return (
            <div className='mt-3 text-center'>
                <img src={villager} alt='Animal Crossing Villager reading' className='mx-auto d-block mb-4' style={{width: 'clamp(125px, 20vw, 250px)'}}/>
                <a href='https://docs.google.com/document/d/1vbUiVxgUiebh982hgPb3ygAvJ5LV_yKkdbfUDMspws8/edit?usp=sharing' className="button fw-bold">Leggi la documentazione</a>
                <ul className='ps-0'>
                    <li><h2 className='pt-3 mt-5'>Progetto realizzato da:</h2></li>
                    <li><h3>Bisi Martina</h3></li>
                    <li><h3>Conti Kevin</h3></li>
                </ul>
                <ul className='ps-0'>
                    <li><h2 className='mt-5'>API utilizzata:</h2></li>
                    <li><a href='https://acnhapi.com/doc'><h3>ACNH API (v1)</h3></a></li>
                </ul>
            </div>
    )
}

export default Info;