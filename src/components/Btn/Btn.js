import React from 'react';
import arrow from '../../styles/images/f1-h-section-picto-arrow.png';
import '../../styles/scss/components/Btn/Btn.scss';

const BtnHome = () => {
    return (
        <button>
            <span>DISCOVER</span>
            <img src={arrow} alt="picto-arrow"/>
        </button>
    )
};

export default BtnHome;