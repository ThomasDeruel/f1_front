import React, {Component} from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './NavBarScroll.css';

const list = [
    {name: '1950'},
    {name: '1960'},
    {name: '1970'},
    {name: '1980'},
    {name: '1990'},
    {name: '2000'},
    {name: '2001'},
    {name: '2002'},
    {name: '2003'},
    {name: '2004'},
    {name: '2005'},
    {name: '2006'},
    {name: '2007'},
    {name: '2008'},
    {name: '2009'},
    {name: '2010'},
    {name: '2011'},
    {name: '2012'},
    {name: '2013'},
    {name: '2014'},
    {name: '2015'},
    {name: '2016'},
    {name: '2017'},
    {name: '2018'},
];

// eslint-disable-next-line react/prop-types
const MenuItem = ({text, selected}) => {
    return <div className={`menu-item ${selected ? 'active' : ''}`}>{text}</div>;
};

export const Menu = (list, selected) =>
    list.map(el => {
        const {name} = el;
        const onClick = () => console.log('original onClick ', name);
        return <MenuItem text={name} key={name} selected={selected} onClick={onClick} />;
    });

class NavBarScroll extends Component {
    state = {
        alignCenter: false,
        clickWhenDrag: false,
        dragging: true,
        hideArrows: true,
        itemsCount: list.length,
        selected: 'item1',
        scrollToSelected: true,
        translate: undefined,
        transition: 0.4,
        wheel: true,
        showList: true,
    };

    constructor(props) {
        super(props);
        this.menu = null;
        this.menuItems = Menu(list.slice(0, list.length), this.state.selected);
    }

    onUpdate = ({translate}) => {
        console.log(
            // `onUpdate: translate: ${translate} firstItemVisible: ${firstItemVisible}, lastItemVisible: ${lastItemVisible}`
            `onUpdate: translate: ${translate}`
        );
        this.setState({translate});
    };

    onSelect = key => {
        console.log(`onSelect: ${key}`);
        this.setState({selected: key});
    };

    setItemsCount = ev => {
        const {itemsCount = list.length, selected} = this.state;
        const val = +ev.target.value;
        const itemsCountNew =
            !isNaN(val) && val <= list.length && val >= 0
                ? +ev.target.value
                : list.length;
        const itemsCountChanged = itemsCount !== itemsCountNew;

        if (itemsCountChanged) {
            this.menuItems = Menu(list.slice(0, itemsCountNew), selected);
            this.setState({
                itemsCount: itemsCountNew,
            });
        }
    };

    setSelected = ev => {
        const {value} = ev.target;
        this.setState({selected: String(value)});
    };
    render() {
        const {
            selected,
            translate,
            transition,
            wheel,
            showList,
            scrollToSelected,
        } = this.state;

        const menu = this.menuItems;

        return (
            <div>
                { showList && (
                    <ScrollMenu
                        ref={el => (this.menu = el)}
                        data={menu}
                        transition={+transition}
                        onUpdate={this.onUpdate}
                        onSelect={this.onSelect}
                        scrollToSelected={scrollToSelected}
                        selected={selected}
                        scrollBy={0}
                        translate={translate}
                        onChange={() => this.setState({wheel: !wheel})}
                    />
                )}

                <hr />
            </div>
        );
    }
}

export default NavBarScroll;
