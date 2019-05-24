import React from 'react';
import {formulaFonts} from '../styles/fonts';

const ShowData = ({icon,data}) => {

    return (
    <li style={listItem}>
        <img style={iconStyle} src={require(`../assets/img/${icon}.svg`)} alt="icon data"/>
        <p style={dataStyle}>{data}</p>
    </li>
    )
}

const listItem = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
}
const iconStyle = {
    width: '25px',
    height: '25px'
}

const dataStyle = {
    fontFamily: formulaFonts.wide,
    fontSize: "24px",
}

export default ShowData;