import React, { Component } from 'react';
import Scroll from '../../components/ScrollPilote/scroll';
import NavBar from '../../components/NavBar';
import NavBarScroll from "../../components/NavBarScroll/NavBarScroll";
import './Pilots.scss';


import Api from '../../helpers/api/Api' ;

class Pilots extends Component {
    constructor(props) {
        super(props);
        this.state = { gallery: [], selected: '' };
        this.changeColor = this.changeColor.bind(this);
        this.a = 2010;
    }

    async componentWillMount() {
        await Api.getDefaultPilots();
        
        let gallery = this.state.gallery;
        fetch('http://142.93.104.14/api/summary_seasons?year=2018')
            .then((result) => {

                return result.json();
            }).then((jsonResult) => {
                var tab = jsonResult['hydra:member'];
                for (let i = 0; i < tab.length; i++) {
                    let tt = tab[i].constructor.name;
                    let p = tab[i].driver;

                    let entry = tab[i].driver;
                    entry.constructor = tab[i].constructor.name;
                    entry.fastestLapSpeed = tab[i].fastestLapSpeed;
                    entry.mediumGrid = tab[i].mediumGrid;
                    entry.position = tab[i].position;
                    entry.score = tab[i].score;
                    entry.wins = tab[i].wins;
                    //Object.assign(entry, { constructor: tab[i].constructor.name });

                    gallery.push(entry);
                }
                //console.log(a.length);
                this.setState({ gallery });
            })

    }

    changeColor = (data) => {

        this.setState({
            selected: data
        });


        let gallery = [];
        fetch('http://142.93.104.14/api/summary_seasons?year=' + this.state.selected)
            .then((result) => {

                return result.json();
            }).then((jsonResult) => {
                var tab = jsonResult['hydra:member'];
                for (let i = 0; i < tab.length; i++) {
                    let tt = tab[i].constructor.name;
                    let p = tab[i].driver;

                    let entry = tab[i].driver;
                    entry.constructor = tab[i].constructor.name;
                    entry.fastestLapSpeed = tab[i].fastestLapSpeed;
                    entry.mediumGrid = tab[i].mediumGrid;
                    entry.position = tab[i].position;
                    entry.score = tab[i].score;
                    entry.wins = tab[i].wins;
                    //Object.assign(entry, { constructor: tab[i].constructor.name });

                    gallery.push(entry);
                }
                //console.log(a.length);
                if (gallery) {
                    this.setState({ gallery });
                }
            })





    }


    render() {
        console.log(this.state.selected)
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

export default Pilots;