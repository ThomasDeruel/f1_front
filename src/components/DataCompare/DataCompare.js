import React, { useState, useEffect } from "react";
import DataRow from "../DataRow";
import PilotColumnItem from '../PilotColumnItem/PilotColumnItem';
import Radar from '../Radar/Radar';
import './datacompare.css';

const DataCompare = ({year,firstPilot,data}) => {
    const [secondPilot,setSecondPilot] = useState(null);

    const otherpilots = data.filter(pilot=>{
        return pilot !== firstPilot
    })
    
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
                    {otherpilots.map((pilot,i)=>(
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