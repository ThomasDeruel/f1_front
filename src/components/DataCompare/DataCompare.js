import React, { useState, useEffect } from "react";
import DataRow from "../DataRow";
import PilotColumnItem from '../PilotColumnItem/PilotColumnItem';
import Radar from '../Radar/Radar';
import './datacompare.css';

const DataCompare = ({year,firstPilot,data, type}) => {
    const [secondPilot,setSecondPilot] = useState(null);

    const otherpilots = data.filter(pilot=>{
        return pilot !== firstPilot
    })
    const labels = () => {
        return type === "pilot" ?
        ['points', 'temps cumulé', 'rang', 'position arrivé'] :
        ['points', 'temps cumulé', 'rang', 'temps d\'arrêts']
    }

    const keys = () => {
        return type === "pilot" ?
        ['score','cumulativeMillisecond','mediumGrid','position'] :
        ['score','cumulativeMillisecond','mediumGrid','pitStopTime']
    }
    /**
     * data-> must be replace (must be a props)
     */
    useEffect(()=>{

        document.querySelector('.pilotsCompareContainer').scrollIntoView({ 
            behavior: 'smooth' 
          })
    },[])
 
    return (
        <section className="pilotsCompareContainer">

            <DataRow 
            data={firstPilot} 
            mustBeLeft={true} 
            year={year} 
            type={type}/>
            
            {secondPilot !== null && (
                <Radar 
                labels={labels()}
                keys={keys()}
                data={[firstPilot,secondPilot]}
                allValues={data}
                type={type}
                />
            )}
            {secondPilot !== null ?
                <DataRow 
                data={secondPilot}
                mustBeLeft={false}
                type={type}/>
            :
                <section className="PilotColumnItemContainer">
                    {otherpilots.map((pilot,i)=>(
                        <PilotColumnItem 
                        key={i+95}
                        data={pilot} 
                        secondPilot={secondPilot}
                        setSecondPilot={setSecondPilot }
                        type={type}
                        />
                    ))}
                </section>
            }
            
        </section>
    )
};

export default DataCompare; 