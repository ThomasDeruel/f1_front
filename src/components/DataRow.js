import React, {useState} from "react";
import ShowData from './ShowData';
import  {convertToHours} from '../helpers/functions/functions';
import '../styles/css/datapilot.css';

const DataRow = ({year,data, mustBeLeft}) =>{

    return (
    <section className={`dataPilotContainer ${mustBeLeft ? 'isLeft' :''}`}>
        <div className="dataPilotContainer-header-flex">
            <div className="dataPilotContainer-header-item">
                <h3>{`${data.forename} ${data.surename}`}</h3>
                <img src={require("../assets/img/ferrari-emblem-50x50.png")}alt="ecurie logo"/>
            </div>
        </div>
        <div className="dataPilotContainer-data-flex">
            <div className="dataPilotContainer-data">
                <p className="dataPilotContainer-ecurieTitle">
                    Ecurie <span>{data.constructor}</span>
                </p>
                <div className="dataListContainer">
                    <ShowData icon="trophy" data={{name:"Score", value:data.score}}/>
                    <ShowData icon="timer" data={{name:"Cumulés", value:convertToHours(data.cumulativeTime)}}/>
                    <ShowData icon="speed" data={{name:"Vitesse", value:data.averageTspeed}}/>
                </div>
            </div>
        </div>
        <div style={mustBeLeft ? {left: '-20%'} : {left: '50%'}} className="dataPilotContainer-background">
            <img src={require("../assets/img/sebastian-vettle.png")} alt="pilot face"/>
        </div>
    </section>
    )
}
/*
const HeaderSection = ({data,mustBeLeft}) => {
    return (
        <div style={LeftOrRight(mustBeLeft)} className="dataPilotContainer-header-flex">
            <div className="dataPilotContainer-header-item">
                <h3>{`${data.forename} ${data.surename}`}</h3>
                <img src={require("../assets/img/ferrari-emblem-50x50.png")}alt="ecurie logo"/>
            </div>
        </div>
    )
}
*/

const LeftOrRight = (mustBeLeft) =>{
    return mustBeLeft ? {justifyContent: 'flex-end'} : {justifyContent: 'flex-start'}
}

const rowReverse = (mustBeLeft) =>{
    return mustBeLeft ? {flexDirection: 'row'} : {flexDirection: 'row-reverse'}
}





export default DataRow;
