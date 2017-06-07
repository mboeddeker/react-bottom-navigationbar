import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import PropTypes from 'prop-types';



import './App.css';

import AGTopNavigation from './components/topNav/ag-topnavigation';
import AGBottomNavigation from './components/btnNav/AG-BottomNavigation';
import AGNavigationItem from './components/btnNav/AG-BottomNavigationItem';
import AGBlog from './components/blog/ag-blog';



const history = createHistory();
const location = history.location;
const unlisten = history.listen((location, action) => {
    // location is an object like window.location
    console.log(action, location.pathname, location.state)
});

var NotFound = () => {
    return (
        <div>
            <br/>
            <br/>
            <br/>
            <Link to="/online">ONLINE</Link>
            NOT FOUND
        </div>
    );
};


var NotFound2 = () => {
    return (
        <div>
            <br/>
            <br/>
            <br/>
            NOT FOUND
        </div>
    );
};


//<Link to="/online">ONLINE</Link>

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item: 2
        };
        this.handleOnItemClick = this.handleOnItemClick.bind(this);

    }




handleOnItemClick(itemNumber) {
    const contextTypes = {
        router: PropTypes.object,
    };

    this.setState({item: itemNumber});
        console.log(this.state.item);
    contextTypes.router.push('/online')


    }

    render() {


        return (

            <div className="App">

                <AGTopNavigation/>


                <Router>
                    <Switch>
                        <Route path="/" exact component={NotFound}/>
                        <Route path="/online" component={() => {
                            alert('HI');
                        }}/>
                        <Route component={NotFound}/>

                    </Switch>
                </Router>



                <AGBottomNavigation>


                    <AGNavigationItem
                        ag_width="span_4_of_12"
                        icon="rocket"
                        itemText="Rakete"
                        ID={1}
                        stateID={this.state.item}
                        onTouchThis={() => {
                            this.handleOnItemClick(1)
                        }}/>

                    <AGNavigationItem
                        ag_width="span_4_of_12"
                        icon="home"
                        itemText="Home"
                        ID={2}
                        stateID={this.state.item}
                        onTouchThis={() => {
                            this.handleOnItemClick(2)
                        }}/>
                    <AGNavigationItem
                        ag_width="span_4_of_12"
                        icon="instagram"
                        itemText="Instagram"
                        ID={3}
                        stateID={this.state.item}
                        onTouchThis={() => {
                            this.handleOnItemClick(3)
                        }}/>
                </AGBottomNavigation>
            </div>
        );
    }
}

export default App;
