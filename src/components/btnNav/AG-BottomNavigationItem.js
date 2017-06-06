/**
 * Created by marvinboddeker on 04.06.17.
 */
import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import './AG-BottomNavigation.css';
import './Grid.css'
import PropTypes from 'prop-types';


class AGBottomNavigationItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cursorPos: {},
            bgColor: '#4B96B4'
        }
    }

    componentWillMount() {
        console.log(this.props.ID);
        if(this.props.ID !== this.props.stateID){
            this.setState({
                bgColor: '#333333'
            })
        }
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.ID !== nextProps.stateID){
            this.setState({
                bgColor: '#333333'
            })
        } else {
            this.setState({
                bgColor: '#4B96B4'
            })
        }

        console.log('NextProps: ',nextProps);
    }

    

    render() {

        return (
            
            <div
                className={"AGnavigationitem " + this.props.ag_width}
                onClick={this.props.onTouchThis} >
                
                <FontAwesome
                    className='navigationImageItem'
                    size='2x'
                    name={this.props.icon}
                    style={{color:this.state.bgColor}}/>
                    
                <p className="ag_itemText" style={{color:this.state.bgColor}}>{this.props.itemText}</p>
                
            </div>
            

        );
    }


}

AGBottomNavigationItem.prototypes = {
    ag_width: PropTypes.string,
    icon: PropTypes.string.isRequired,
    itemText: PropTypes.string.isRequired,
    ID: PropTypes.number.isRequired,
    stateID: PropTypes.number.isRequired,
    onTouchThis: PropTypes.func.isRequired
}

export default AGBottomNavigationItem;