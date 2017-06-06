import React, {Component} from 'react';
import './AG-BottomNavigation.css';
import './Grid.css'
import PropTypes from 'prop-types';


class AGBottomNavigation extends Component {

    constructor(props){
        super(props);

        this.numberOfItems = this.props.numberOfItems;
    }

    componentWillMount(){
        console.log(this.numberOfItems);

    }





    render() {
        return (

            <div className="navigation-wrapper">
                <div className="navigationbar">
                    {this.props.children}
                </div>
            </div>

        );
    }

}

export default AGBottomNavigation;