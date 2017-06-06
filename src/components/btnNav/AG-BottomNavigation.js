import React, {Component} from 'react';
import './AG-BottomNavigation.css';
import './Grid.css'


class AGBottomNavigation extends Component {

    constructor(props){
        super(props);
        console.log('Bottom Navigation');

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