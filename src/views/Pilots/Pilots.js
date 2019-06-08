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
        this.state = { gallery: [], selected: '' };
        this.changeColor = this.changeColor.bind(this);
        this.a = 2010;
    }

    async componentWillMount() {

        const gallery = await Api.getDefaultPilots();
        this.setState({ gallery });
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
                <DataCompare year={2017} />
            </div >
        )
    }
}

export default PilotsContainer;