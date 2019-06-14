import React, { useState, useEffect } from "react";
import DataRow from "../DataRow";
import PilotColumnItem from '../PilotColumnItem/PilotColumnItem';
import Radar from '../Radar/Radar';
import './datacompare.css';

const DataCompare = ({year,firstPilot, setFirstPilot, data, type}) => {
    const [secondData,setSecondData] = useState(null);

    const otherpilots = data.filter(pilot=>{
        return pilot !== firstPilot
    })
    const labels = () => {
        return type === "pilot" ?
        ['points', 'Pole position', 'rang', 'position arrivé'] :
        ['points', 'Pole position', 'rang', 'temps d\'arrêts']
    }

    const keys = () => {
        return type === "pilot" ?
        ['score','nbFirstGrid','mediumGrid','position'] :
        ['score','nbFirstGrid','mediumGrid','pitStopTime']
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
            type={type}
            setData={setFirstPilot}
            />
            
            {secondData !== null && (
                <Radar 
                labels={labels()}
                keys={keys()}
                data={[firstPilot,secondData]}
                allValues={data}
                type={type}
                />
            )}
            {secondData !== null ?
                <DataRow 
                data={secondData}
                mustBeLeft={false}
                type={type}
                setData={setSecondData}
                />
            :
                <section className="PilotColumnItemContainer">
                    {otherpilots.map((pilot,i)=>(
                        <PilotColumnItem 
                        key={i+95}
                        data={pilot} 
                        secondData={secondData}
                        setSecondData={setSecondData }
                        type={type}
                        />
                    ))}
                </section>
            }
            
        </section>
    )
};

export default DataCompare; 