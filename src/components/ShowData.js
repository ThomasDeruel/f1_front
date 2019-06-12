import React from 'react';
import { formulaFonts } from '../styles/fonts';

const ShowData = ({ icon, data }) => {

    return (
        <li style={listItem}>
            <img style={iconStyle} src={require(`../assets/img/${icon}.svg`)} alt="icon data" />
            <p style={dataName}>{data.name}</p>
            <p style={dataStyle}>{data.value}</p>
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
    marginLeft: '29px'
}
const dataStyle = {
    fontFamily: formulaFonts.bold,
    fontSize: "16px",
    color: '#CF2933'
}

export default ShowData;