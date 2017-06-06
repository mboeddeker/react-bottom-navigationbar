import React, {Component} from 'react';
import './App.css';

import AGTopNavigation from './components/topNav/ag-topnavigation';
import AGBottomNavigation from './components/btnNav/AG-BottomNavigation';
import AGNavigationItem from './components/btnNav/AG-BottomNavigationItem';
import AGBlog from './components/blog/ag-blog';

class App extends Component {

    constructor(props){
        super(props);
        this.state ={
            item:2
        };
        this.handleOnItemClick = this.handleOnItemClick.bind(this);
    }

    componentWillMount(){
       
    }

    handleOnItemClick(itemNumber){
        this.setState({ item: itemNumber });
        console.log(this.state.item);
        //TODO: FUNKTIONS SWITCH ROUTE ETC
        switch (itemNumber) {
            case 1:
                console.log(1);
                break;
            case 2:
                console.log(2);
                break;
            case 3:
                console.log(3);
                break;
        
            default:
                break;
        }

    }

    render() {
        return (
            <div className="App">
                <AGTopNavigation/>
                <AGBlog/>

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
