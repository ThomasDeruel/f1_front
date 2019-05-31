import React, { useState } from "react";
import DataPilot from "./DataPilot";
import PilotColumnItem from './PilotColumnItem/PilotColumnItem';
import '../styles/css/pilotscompare.css';

const PilotsCompare = ({year/*,data,firstPilot}*/}) => {
    const [secondPilot,setSecondPilot] = useState(null);
    /**
     * data-> must be replace (must be a props)
     */
    const firstPilot = 
    {
        pilotname:'jean pierre',
        rank: 2,
        victory: 9,
        ecury: 'Mercedess',
        origin: 'france',
        cumulativeTime: 1559228168,
        averageTspeed: 254,
    }
    const data = [
        {
            pilotname:'jean pierre',
            rank: 2,
            victory: 9,
            ecury: 'Mercedess',
            origin: 'france',
            cumulativeTime: 1559228168,
            averageTspeed: 254,
        },
        {
            pilotname:'Meh euh',
            rank: 5,
            victory: 7,
            ecury: 'ecury 2',
            origin: 'france',
            cumulativeTime: 1559228168,
            averageTspeed: 254,
        },
        {
            pilotname:'Cail Jean',
            rank: 1,
            victory: 7,
            ecury: 'ecury 3',
            origin: 'france',
            cumulativeTime: 1559228168,
            averageTspeed: 254,
        }
    ]
    return (
        <section className="pilotsCompareContainer">

            <DataPilot data={firstPilot} mustBeLeft={true} year={year}/>
            
            {secondPilot !== null && (
            <div className="radar-container">
                radar
            </div>
            )}
            {secondPilot !== null ?
            <DataPilot data={secondPilot} mustBeLeft={false} year={year}/>:
            <section className="PilotColumnItemContainer">
                {data.map(pilot=>(
                    <PilotColumnItem data={pilot} secondPilot={secondPilot} setSecondPilot={setSecondPilot }/>
                ))}
            </section>
            }
            
        </section>
    )
};

export default PilotsCompare; 