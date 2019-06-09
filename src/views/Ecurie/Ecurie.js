import React, { Component } from 'react';
import Scroll from '../../components/ScrollEcurie/scroll';

import NavBar from '../../components/NavBar';
import NavBarScroll from "../../components/NavBarScroll/NavBarScroll";

import Api from '../../helpers/api/Api';

class Ecurie extends Component {
    constructor(props) {
        super(props);
        this.state = { gallery: [], selected: '' };
        this.changeColor = this.changeColor.bind(this);
    }

    async componentWillMount() {

        const gallery = await Api.getDefaultEcuris();
        this.setState({ gallery });

    }

    async changeColor(data) {

        this.setState({
            selected: data
        });

        const gallery = await Api.setEcuris(this.state.selected);
        if (gallery) {
            this.setState({ gallery });
        }
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