import React from 'react';
import MenuConsumer from '../../components/MenuConsumer';
const HomeContainer = ({menuOpen,setMenuOpen}) => {
    return (
        <div>
          <p>Home</p>
        </div>
    )
}

export default MenuConsumer(HomeContainer);