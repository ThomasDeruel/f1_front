import React from 'react';
import arrowLeft from '../../styles/images/f1-h-section-arrow-left.svg';
import arrowRight from '../../styles/images/f1-h-section-arrow-right.svg';
import '../../styles/scss/components/Btn/BtnSlider.scss';


const BtnSlider = () => {
    return (
        <div className={'container-button'}>
            <button className={'container-button_arrow'}><img src={arrowLeft} alt="arrow-left"/></button>
            <button className={'container-button_arrow'}><img src={arrowRight} alt="arrow-right"/></button>
        </div>
    )
};

export default BtnSlider;