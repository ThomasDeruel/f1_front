import React, { Component } from 'react';
import Scroll from '../../components/ScrollEcurie/scroll';

import f1 from "../../styles/images/d.png";
import NavBar from '../../components/NavBar';
import NavBarScroll from "../../components/NavBarScroll/NavBarScroll";



class Ecurie extends Component {
    constructor(props) {
        super(props);
        this.state = { gallery: [], selected: '' };
        this.changeColor = this.changeColor.bind(this);
        this.a = 2010;
    }

    componentWillMount() {

        let gallery1 = [];

        fetch('http://142.93.104.14/api/summary_season_constructors?year=2018')

            .then((result) => {

                return result.json();

            }).then((jsonResult) => {
                var tab = jsonResult['hydra:member'];

                for (let i = 0; i < tab.length; i++) {

                    let entry = tab[i].constructor;

                    entry.drivers = tab[i].driver;
                    entry.fastestLapSpeed = tab[i].fastestLapSpeed;
                    entry.mediumGrid = tab[i].mediumGrid;
                    entry.position = tab[i].position;
                    entry.score = tab[i].score;
                    entry.wins = tab[i].wins;

                    //Object.assign(entry, { constructor: tab[i].constructor.name });

                    gallery1.push(entry);

                }


                if (gallery1) {

                    this.setState({ gallery: gallery1 });
                }

            })
    }

    changeColor = (data) => {

        this.setState({
            selected: data
        });

        let gallery1 = [];

        fetch('http://142.93.104.14/api/summary_season_constructors?year=' + this.state.selected)

            .then((result) => {

                return result.json();

            }).then((jsonResult) => {
                var tab = jsonResult['hydra:member'];

                for (let i = 0; i < tab.length; i++) {

                    let entry = tab[i].constructor;

                    entry.drivers = tab[i].driver;
                    entry.fastestLapSpeed = tab[i].fastestLapSpeed;
                    entry.mediumGrid = tab[i].mediumGrid;
                    entry.position = tab[i].position;
                    entry.score = tab[i].score;
                    entry.wins = tab[i].wins;

                    //Object.assign(entry, { constructor: tab[i].constructor.name });

                    gallery1.push(entry);

                }


                if (gallery1) {

                    this.setState({ gallery: gallery1 });
                }

            })

    }
    render() {


        return (
            <div>
                <div className="fixe-Menu">
                    <NavBarScroll selected={this.changeColor} />
                    <NavBar />
                </div>
                <Scroll
                    className="scroll"
                    galery={this.state.gallery}
                />


            </div >

        )
    }
}
export default Ecurie;