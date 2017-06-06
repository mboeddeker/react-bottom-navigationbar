/**
 * Created by marvinboddeker on 04.06.17.
 */
import React, {Component} from 'react';
import Ink from 'react-ink';
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
        if(this.props.ID != this.props.stateID){
            this.setState({
                bgColor: '#333333'
            })
        }
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.ID != nextProps.stateID){
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
                onClick={this.props.onTouchThis}
            >

                <FontAwesome
                    className='navigationImageItem'
                    size='2x'
                    name={this.props.icon}
                    style={{color:this.state.bgColor}}/>
                <p className="ag_itemText">{this.props.itemText}</p>
            </div>

        );
    }

    /*
     onMouseUp={ this.handleClick.bind(this) }
     onTouchend={ this.handleClick.bind(this) }
     */

}

export default AGBottomNavigationItem;