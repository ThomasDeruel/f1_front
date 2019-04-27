import React from 'react';
import MenuConsumer from '../../components/MenuConsumer';
import logo from '../../styles/images/logo.png';
import flesh from '../../styles/images/flesh.png';
import galery from '../../styles/images/galery.png';
import Section2 from '../../styles/images/Section2.png';
import Section3 from '../../styles/images/Section3.png';
import Section1 from '../../styles/images/Section1.png';
import graph1 from '../../styles/images/f1-h-section3-bg-graph01.png';
import graph2 from '../../styles/images/f1-h-section3-bg-graph02.png';
import bgEcurie from '../../styles/images/f1-h-section3-img-ecurie.png';
import '../../styles/scss/home.scss';
import TitleDataVize from '../../components/HomeComponent.js/titleDataVize';
import BtnHome from '../../components/Btn/Btn';
const HomeContainer = ({ menuOpen, setMenuOpen }) => {

  return (
    <div>
      <section className={'introDataVize'}>
            <div className={'presentation'}>
              <img src={logo} className={'logo'} alt={'logo'}/>
              <div className={'bloc'}>
                <h1 className={'title'}>Les <span className={'spantitle'}>Pilotes</span></h1>
                <h2 className={'explorePlus'}>Explorer leurs plus grand explois et comparez les !</h2>
                <div className={'explore'}>
                  <p className={'exploreTitle'}>Explorer</p>
                  <img src={flesh} className={'exploreGo'} alt={'picto-arrow'}/>
                </div>
              </div>
            </div>
            <div className={'galeries'}>
              <img src={galery} className={'galery'} alt={'img-gallery'}/>
            </div>
      </section>
      <div className={'def'}>
        <div style={{ padding: "3% 0 3% 0" }}> <TitleDataVize /></div>

        <div className={'par'}>
          <p className={'text'}>There are many simple beauty tips that don’t have to take up a lot of time.
             These simple tips can be acc"omplished in a matter of minutes and can have a noticeable
              improvement on your appearance. These beauty tips include simple suggestions such as getting
               enough sleep each night, drinking plenty of water each day and completely removing your makeup each night.
                 </p>
          <p>There are many simple beauty tips that don’t have to take up a lot of time.
               These simple tips can be accomplished in a matter of minutes and can have a noticeable
               improvement on your appearance. These beauty tips include simple suggestions such as getting
               enough sleep each night, drinking plenty of water each day and completely removing your makeup each night.
               </p>
        </div>
      </div>
      <section>
        <div style={{ padding: "3% 0 1% 0" }}>
          <TitleDataVize />
        </div>
        <p className={'slogan'}>LAISSEZ-VOUS CONDUIRE A TRAVERS NOS SUGGESTION</p>
        <div>
          <div>
            <img src={Section1} alt={'bg-section1'}/>
          </div>
          <div>
            <img src={Section2} alt={'bg-section2'}/>
          </div>
          <div>
            <img src={Section3} alt={'bg-section3'}/>
          </div>
        </div>
      </section>

        {/* SECTION ECURIE */}
      <section className={'section3'}>
        <div className={'inner'}>
            <div className={'container-first'}>
                <img src={graph1} alt="bg-graph1"/>
                <img src={graph2} alt="bg-graph2"/>
            </div>
            <div className={'container-second'}>
                <div className={'container-second_title'}>
                    <h2>Les Ecuries<br/><span>Parce que la f1 c'est une équipe</span></h2>
                    <p>There are many simple beauty tips that don’t have to take up a lot of time.
                        These simple tips can be accomplished in a matter of minutes and can have a noticeable improvement on your appearance.
                        These beauty tips include simple suggestions such as getting enough sleep each night, drinking plenty of water each day and
                        completely removing your makeup each night.
                    </p>
                    <BtnHome/>
                </div>
                <img className={'ecurie'} src={bgEcurie} alt=""/>
            </div>
        </div>
      </section>
    </div>
  )
}

export default MenuConsumer(HomeContainer);