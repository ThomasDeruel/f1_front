import React, { useState } from "react";
import DataPilot from "./DataPilot";
import PilotColumnItem from './PilotColumnItem/PilotColumnItem';
import Radar from './Radar/Radar';
import '../styles/css/pilotscompare.css';

const PilotsCompare = ({year/*,data,firstPilot}*/}) => {
    const [secondPilot,setSecondPilot] = useState(null);
    /**
     * data-> must be replace (must be a props)
     */
    const firstPilot = {
        forename:'jean',
        surename:'pierre',
        position: 2,
        score: 9,
        mediumGrid:3,
        constructor: 'Mercedess',
        origin: 'france',
        cumulativeTime: 1559228168,
        averageTspeed: 254,
    }
    const data = [
        {
            forename:'jean',
            surename:'pierre',
            position: 2,
            score: 9,
            mediumGrid:3,
            constructor: 'Mercedess',
            origin: 'france',
            cumulativeTime: 1559228168,
            averageTspeed: 254,
        },
        {
            forename:'Meh',
            surename:'euh',
            position: 5,
            score: 7,
            mediumGrid:4,
            constructor: 'ecury 2',
            origin: 'france',
            cumulativeTime: 1559228168,
            averageTspeed: 254,
        },
        {
            forename:'Cail',
            surename:'Jean',
            position: 1,
            score: 7,
            mediumGrid:5,
            constructor: 'ecury 3',
            origin: 'france',
            cumulativeTime: 1559228168,
            averageTspeed: 254,
        }
    ]
    return (
        <section className="pilotsCompareContainer">

            <DataPilot data={firstPilot} mustBeLeft={true} year={year}/>
            
            {secondPilot !== null && (
                <Radar 
                labels={['points', 'temps', 'position départ', 'position arrivé']}
                keys={['score','cumulativeTime','mediumGrid','position']}
                data={[firstPilot,secondPilot]}
                allValues={data}
                />
            )}
            {secondPilot !== null ?
                <DataPilot data={secondPilot} mustBeLeft={false} year={year}/>
            :
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