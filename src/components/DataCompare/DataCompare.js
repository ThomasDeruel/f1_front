import React, { useState, useEffect } from "react";
import DataRow from "../DataRow";
import PilotColumnItem from '../PilotColumnItem/PilotColumnItem';
import Radar from '../Radar/Radar';
import './datacompare.css';

const DataCompare = ({year,firstPilot/*,data,firstPilot}*/}) => {
    const [secondPilot,setSecondPilot] = useState(null);
    /**
     * data-> must be replace (must be a props)
     */
    useEffect(()=>{
        document.querySelector('.pilotsCompareContainer').scrollIntoView({ 
            behavior: 'smooth' 
          })
    },[])
    /*const firstPilot = {
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
    */
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
            score: 19,
            mediumGrid:4,
            constructor: 'ecury 2',
            origin: 'france',
            cumulativeTime: 1229228168,
            averageTspeed: 150,
        },
        {
            forename:'Cail',
            surename:'Jean',
            position: 9,
            score: 2,
            mediumGrid:5,
            constructor: 'ecury 3',
            origin: 'france',
            cumulativeTime: 1559228168,
            averageTspeed: 254,
        }
    ]
    return (
        <section className="pilotsCompareContainer">

            <DataRow data={firstPilot} mustBeLeft={true} year={year}/>
            
            {secondPilot !== null && (
                <Radar 
                labels={['points', 'temps', 'position départ', 'position arrivé']}
                keys={['score','cumulativeTime','mediumGrid','position']}
                data={[firstPilot,secondPilot]}
                allValues={data}
                />
            )}
            {secondPilot !== null ?
                <DataRow data={secondPilot} mustBeLeft={false} year={year}/>
            :
                <section className="PilotColumnItemContainer">
                    {data.map((pilot,i)=>(
                        <PilotColumnItem 
                        key={i+95}
                        data={pilot} 
                        secondPilot={secondPilot}
                        setSecondPilot={setSecondPilot }/>
                    ))}
                </section>
            }
            
        </section>
    )
};

export default DataCompare; 