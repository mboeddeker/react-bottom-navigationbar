import React, {Component} from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import AGTopNavigation from './components/topNav/ag-topnavigation';
import AGBottomNavigation from './components/btnNav/AG-BottomNavigation';
import AGNavigationItem from './components/btnNav/AG-BottomNavigationItem';
import AGBlog from './components/blog/ag-blog';
import AGBlogPost from './components/blog/post/ag-blogpost';
import Home from './components/home/home';

// COMPONENTS FOR ROUTING

let Rocket = () => (
  <div>
    Hallo
  </div>
);

let Main = () => (
  <Switch>
    <Route exact path="/"  render={() => <Home/>}/>
    <Route path="/rocket" component={Rocket}/>
    <Route path="/insta" component={AGBlog}/>
    <Route path="/blog/:id" component={AGBlogPost}/>
  </Switch>
);

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      item: 2
    };
    this.handleOnItemClick = this
      .handleOnItemClick
      .bind(this);
    console.log(this);
  }

  handleOnItemClick(itemNumber) {
    this.setState({item: itemNumber});
  }

  render() {

    return (
      <Router>
        <div className="App">

          <AGTopNavigation/>
          
          <Main/>

          <AGBottomNavigation>

            <Link to="/rocket">
              <AGNavigationItem
                ag_width="span_4_of_12"
                icon="rocket"
                itemText="Rakete"
                ID={1}
                stateID={this.state.item}
                onTouchThis={() => {
                this.handleOnItemClick(1)
              }}/>
            </Link>

            <Link to="/">
              <AGNavigationItem
                ag_width="span_4_of_12"
                icon="home"
                itemText="Home"
                ID={2}
                stateID={this.state.item}
                onTouchThis={() => {
                this.handleOnItemClick(2)
              }}/>
            </Link>

            <Link to="/insta">
              <AGNavigationItem
                ag_width="span_4_of_12"
                icon="instagram"
                itemText="Instagram"
                ID={3}
                stateID={this.state.item}
                onTouchThis={() => {
                this.handleOnItemClick(3)
              }}/></Link>

          </AGBottomNavigation>
        </div>

      </Router>
    );
  }

  
}

export default App;
