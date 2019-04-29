import React from 'react';
import arrow from '../../styles/images/f1-h-section-picto-arrow.png';
import '../../styles/scss/components/Btn/Btn.scss';

const BtnHome = () => {
    return (
        <div>
            <button className={'BtnHome-container'}>
                <span className={'BtnHome-container_text'}>DISCOVER</span>
                <img src={arrow} alt="picto-arrow" className={'BtnHome-container_arrow'}/>
            </button>
        </div>
    )
};

export default BtnHome;