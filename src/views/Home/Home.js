import React from 'react';
import roue from '../../styles/images/roue.png';
import { Link } from 'react-router-dom';


const HomeContainer = () => {

  return (
    <div className="home">
      <div className="coverbackground">
        <img src={roue} alt="bg-pilots-03" className="roue" />
        <div className="blockHome"  >
          <h1 className="title">Formule 1</h1>
          <div className="startcomponent">
            <div className="h"> <span className="" >Start</span></div>
            <Link to="/pilots" className="indicator" >
              <span></span>
              <span></span>
            </Link>



          </div>
        </div>
      </div>


    </div >
  )
}

export default HomeContainer;