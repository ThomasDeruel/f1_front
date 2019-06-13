import React, { Component } from 'react';
import Scroll from '../../components/ScrollEcurie/scroll';

import NavBar from '../../components/NavBar';
import NavBarScroll from "../../components/NavBarScroll/NavBarScroll";
import DataCompare from '../../components/DataCompare/DataCompare';
import './Ecurie.scss';
import '../../styles/css/pilotscontainer.css';
import Api from '../../helpers/api/Api';

class Ecurie extends Component {
    constructor(props) {
        super(props);
        this.state = { gallery: [], selected: null, firstPilot: null };
        this.changeColor = this.changeColor.bind(this);
        this.setFirstPilot = this.setFirstPilot.bind(this);
    }

    async componentWillMount() {
        
        const gallery = await Api.getDefaultEcuris();
        this.setState({ gallery, firstPilot:null });

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

        const gallery = await Api.setEcuris(this.state.selected);
        if (gallery) {
            this.setState({ gallery,firstPilot:null });
        }
    }
    setFirstPilot(firstPilot){
        this.setState({ firstPilot });
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
                    setFirstPilot={this.setFirstPilot}
                />
                {this.state.firstPilot !== null &&
                <DataCompare 
                firstPilot={this.state.firstPilot}
                data={this.state.gallery}
                type="constructor"
                setFirstPilot={this.setFirstPilot}
                />
                }
            </div >
        )
    }
}
export default Ecurie;