import React from 'react';


// IMPORT IMG
import bgConstruction from '../../styles/images/bg-construction.png';

// IMPORT STYLES
import '../../styles/scss/home.scss';

// IMPORT COMPONENTS
import MenuConsumer from '../../components/MenuConsumer';

const HomeContainer = ({ menuOpen, setMenuOpen }) => {

  return (
    <div>
        <img src={bgConstruction} alt=""/>
    </div>
  )
}

export default MenuConsumer(HomeContainer);