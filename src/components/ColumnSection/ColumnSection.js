import React from 'react';
import './columnsection.css';

const ColumnSection = ({type,value}) =>{
    return (
        <div className="ColumnSectionContainer">
            <h3>{type}</h3>
            <p className="ColumnSectionContainer-value">{value}</p>
        </div>
    )
}

export default ColumnSection;