import React, {Component} from 'react';
import logo from '../images/logo.svg';
import './ag-topnavigation.css';

class AGTopNavigation extends Component {

    constructor(props){
        super(props);
        console.log('Top Navigation');
    }


    render(){
        return(
            <div className="ag-topnav">
                <img className="logoImage" src={logo} alt=""/>
            </div>
            
        );
    }

}

export default AGTopNavigation;