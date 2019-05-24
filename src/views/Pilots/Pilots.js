import React, {useState} from 'react';
import PilotsCompare from '../../components/PilotsCompare';
import '../../styles/css/pilotscontainer.css';

const PilotsContainer = () => {
    const [year,setYear] = useState(2017);
    return (
        <PilotsCompare year={year}/>
    )
}

export default PilotsContainer;