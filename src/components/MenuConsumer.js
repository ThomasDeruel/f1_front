import React from 'react';
import {MenuContext} from '../helpers/context/menu-context';

// here is a higher order component to consume my MenuContext (cf App.js)

const MenuConsumer = Component => {
    return class extends React.Component {
      render() {
        return (
          <MenuContext.Consumer>
            { value =>
              <Component menuOpen={value.menuOpen} setMenuOpen={value.setMenuOpen} />
            }
          </MenuContext.Consumer>
        )
      }
    }
}

export default MenuConsumer;