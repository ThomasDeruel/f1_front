import React from 'react';
import {formulaFonts} from '../styles/fonts';

const ShowData = ({icon,data, isAnArray=false}) => {
    return (
    <li style={listItem}>
        <img style={iconStyle} src={require(`../assets/img/${icon}.svg`)} alt="icon data"/>
        <p style={dataName}>{data.name}</p>
        {isAnArray ? (
            <div style={stylePilotes}>
            {data.value.map(value=>(
                <p style={dataStyle}>{`${value.forename} ${value.surname}`}</p>
            ))}
            </div>
        ):(
            <p style={dataStyle}>{data.value}</p>       
        )}
    </li>
    )
}

const listItem = {
    display: 'flex',
    width: '100%',
    marginBottom: '24px',
    alignItems: 'center'
}
const iconStyle = {
    width: '25px',
    height: '25px'
}
const dataName = {
    textAlign: 'left',
    fontFamily: formulaFonts.regular,
    width: '116px',
    marginLeft: '48px'
}
const dataStyle = {
    fontFamily: formulaFonts.bold,
    fontSize: "16px",
    color: '#CF2933'
}
 const stylePilotes = {
     display:'flex',
     flexDirection: 'column'
 }
export default ShowData;