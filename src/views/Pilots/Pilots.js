import React, { Component } from 'react';
import Scroll from '../../components/ScrollPilote/scroll';
import NavBar from '../../components/NavBar';
import NavBarScroll from "../../components/NavBarScroll/NavBarScroll";
import DataCompare from '../../components/DataCompare/DataCompare';
import './Pilots.scss';
import '../../styles/css/pilotscontainer.css';

import Api from '../../helpers/api/Api';

class PilotsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { gallery: [], selected: null, firstPilot: null };
        this.changeColor = this.changeColor.bind(this);
        this.setFirstPilot = this.setFirstPilot.bind(this);
        this.a = 2010;
    }

    async componentWillMount() {

        const gallery = await Api.getDefaultPilots();
        this.setState({ gallery });
        const ecuries = await Api.getDefaultEcuris();
        console.log("ecuries", ecuries);
    }
    componentWillUpdate(nextProps,nextState){
        if(this.state.firstPilot !== null && nextState.firstPilot !== this.state.firstPilot){
            document.querySelector('.pilotsCompareContainer').scrollIntoView({ 
                behavior: 'smooth' 
            })
        }
    }
    async changeColor(data) {
        this.setState({
            selected: data
        });

        const gallery = await Api.setPilots(this.state.selected);
        if (gallery) {
            this.setState({ gallery });
        }
    }
    setFirstPilot(firstPilot){
        this.setState({ firstPilot });
    }

    render() {
        console.log('ca change ',this.state)
        return (
            <div>
                <div className="fixe-Menu">
                    <NavBarScroll selected={this.changeColor} />

                    <NavBar />
                </div>


                <Scroll
                    className="scroll"
                    galery={this.state.gallery}
                    setFirstPilot={this.setFirstPilot}
                />
                {this.state.firstPilot !== null &&
                <DataCompare 
                firstPilot={this.state.firstPilot}
                data={this.state.gallery} />
                }
            </div >
        )
    }
}

export default PilotsContainer;