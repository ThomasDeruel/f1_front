import React from 'react';
import {convertToHours} from '../../helpers/functions/functions';
import ColumnSection from "../ColumnSection/ColumnSection";

import './pilotcolumnitem.css';

const PilotColumnItem = ({data,secondPilot,setSecondPilot}) => {
    return (
            <div onClick={()=>setSecondPilot(secondPilot = data)} className="PilotColumnItemContainer-flex">
                <div className="PilotColumnItemContainer-personalDataContainer">
                    <img className="PilotColumnItemContainer-imgContainer" src="https://www.countryflags.io/fr/flat/24.png" alt="logo ecurie"/>
                    <h2>{`${data.forename} ${data.surename}`} </h2>
                    <p className="PilotColumnItemContainer-ecurie">{data.constructor}</p>
                    <span className="PilotColumnItemContainer-rank">{data.rank}</span>
                </div>
                <div className="PilotColumnItemContainer-personalDataContainer-img">
                    <img src={require('../../assets/img/mercedes.svg')}/>
                </div>
                <div className="PilotColumnItemContainer-ColumnSectionContainer">
                    <ColumnSection type="Victoire" value={data.score}/>
                    <ColumnSection type="Tours temps" value={convertToHours(data.cumulativeTime)}/>
                    <ColumnSection type="Vitesse moyenne" value={data.averageTspeed}/>
                </div>
            </div>
    )
}

export default PilotColumnItem;