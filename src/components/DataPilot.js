import React, {useState} from "react";
import ShowData from './ShowData';
import '../styles/css/datapilot.css';

const DataPilot = ({year}) =>{
    

    return (
    <section className="dataPilotContainer">
        <div className="dataPilotContainer-header-flex">
            <div className="dataPilotContainer-header-item">
                <h3>sebastian Vettel</h3>
                <img src={require("../assets/img/ferrari-emblem-50x50.png")}alt="ecurie logo"/>
            </div>
        </div>
        <div className="dataPilotContainer-data-flex">
            <div className="dataPilotContainer-data">
                <p className="dataPilotContainer-ecurieTitle">
                    Ecurie <span>FERRARIE</span>
                </p>
                <div className="dataListContainer">
                    <ShowData icon="trophy" data={{name:"Score", value:"250"}}/>
                    <ShowData icon="timer" data={{name:"Cumulés", value:"250"}}/>
                    <ShowData icon="speed" data={{name:"Vitesse", value:"250"}}/>
                </div>
            </div>
        </div>
        <div className="dataPilotContainer-background">
            <img src={require("../assets/img/sebastian-vettle.png")} alt="pilot face"/>
        </div>
    </section>
    )
}

export default DataPilot;