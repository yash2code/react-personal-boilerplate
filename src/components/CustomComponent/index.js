import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeState } from '../../actions'


//sample component to use with redux
class CustomComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div></div>
         );
    }
}
 
export default CustomComponent;