import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';

class Email extends Component{
    showEmail () {
        return this.props.userINFO.map ((user) => {
            return (

                user.user_email
            );
        });
    }
    render () {
        return(
            this.showEmail()
        );
    }
}

function mapStateToProps (state) {
    return {
        userINFO: state.userINFO.userINFO
    };
}

export default connect(mapStateToProps)(Email);
