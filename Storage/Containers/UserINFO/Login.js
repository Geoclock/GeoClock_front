import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';

class Login extends Component{
    showLogin () {
        return this.props.userINFO.map ((user) => {
            return (
                user.user_login
            );
        });
    }
    render () {
        return(
            this.showLogin()
        );
    }
}

function mapStateToProps (state) {
    return {
        userINFO: state.userINFO.userINFO
    };
}

export default connect(mapStateToProps)(Login);
