import React from "react";
import DataPilot from "./DataPilot";
import '../styles/css/pilotscompare.css';

const PilotsCompare = ({year}) => {
    return (
        <section className="pilotsCompareContainer">

            <DataPilot year={year}/>
            
            <div className="radar-container">
                radar
            </div>
            <div>
                selection list
            </div>
        </section>
    )
};

export default PilotsCompare; 