import React from 'react';
import constructors from '../../helpers/constant/constructor.json';
import ColumnSection from "../ColumnSection/ColumnSection";

import './pilotcolumnitem.css';

const PilotColumnItem = ({data,secondPilot,setSecondData, type}) => {
    return (
            <div onClick={()=>setSecondData(secondPilot = data)} className="PilotColumnItemContainer-flex">
                    {type === 'pilot' ? (
                        <div className="PilotColumnItemContainer-personalDataContainer">
                        <img className="PilotColumnItemContainer-imgContainer" src={require(`../../assets/img/flags/${data.nationality}.svg`)} alt="logo flag"/>
                        <h2>{`${data.forename} ${data.surname}`} </h2>
                        <p className="PilotColumnItemContainer-ecurie">{data.constructor}</p>
                        <span className="PilotColumnItemContainer-rank">{data.rank}</span>
                        </div>                       
                    ):(
                        <div className="PilotColumnItemContainer-personalDataContainer">
                        <img className="PilotColumnItemContainer-imgContainer" src={require(`../../assets/img/flags/${data.nationality}.svg`)} alt="logo flag"/>
                        <h2>Ecurie <b>{data.name}</b></h2>
                        <span className="PilotColumnItemContainer-rank">{data.rank}</span>
                        {data.drivers.map(driver=>(
                            <p className="PilotColumnItemContainer-ecurie">{driver.forename} {driver.surname}</p>
                        ))}
                        </div>  
                    )}
            
                {type === 'pilot' ? (
                <div className="PilotColumnItemContainer-personalDataContainer-img">
                    <img src={require(`../../assets/img/${data.constructor}.png`)} alt="logo constructor" />
                </div>
                ):
                constructors.map(constructor=>{
                    if(constructor.name === data.name) {
                        return (
                    <div className="PilotColumnItemContainer-personalDataContainer-img">
                    
                    <img src={constructor.url} alt="logo constructor ya" />
                    </div>
                    )}
                })}
                <div className="PilotColumnItemContainer-ColumnSectionContainer">
                    <ColumnSection type="Victoire" value={data.score}/>
                    <ColumnSection type="Tours temps" value={data.cumulativeTime}/>
                    <ColumnSection type="Pole position" value={data.nbFirstGrid}/>
                </div>
            </div>
    )
}

export default PilotColumnItem;