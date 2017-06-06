import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


import AGBottomNavigation from './btnNav/AG-BottomNavigation';
import AGNavigationItem from './btnNav/AG-BottomNavigationItem';

class App extends Component {

    constructor(props){
        super(props);
        this.state ={
            item:1
        };
        this.handleOnItemClick = this.handleOnItemClick.bind(this);
    }

    componentWillMount(){

    }

    handleOnItemClick(itemNumber){
        this.setState({ item: itemNumber });
        console.log(this.state.item);
        //TODO: FUNKTIONS SWITCH ROUTE ETC

    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>

                <AGBottomNavigation>
                    <AGNavigationItem
                        ag_width="span_4_of_12"
                        icon="rocket"
                        itemText="Rakete"
                        ID={1}
                        stateID={this.state.item}
                        onTouchThis={() => {this.handleOnItemClick(1)}}/>
                    <AGNavigationItem
                        ag_width="span_4_of_12"
                        icon="home"
                        itemText="Home"
                        ID={2}
                        stateID={this.state.item}
                        onTouchThis={() => {this.handleOnItemClick(2)}}/>
                    <AGNavigationItem
                        ag_width="span_4_of_12"
                        icon="instagram"
                        itemText="Instagram"
                        ID={3}
                        stateID={this.state.item}
                        onTouchThis={() => {this.handleOnItemClick(3)}}/>
                </AGBottomNavigation>

            </div>
        );
    }
}

export default App;
