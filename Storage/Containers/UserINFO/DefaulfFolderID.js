import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';

class DefaultFolderID extends Component{
    showDefaultFolderID () {
        return this.props.userINFO.map ((user) => {
            return (
                user.dafault_folder_id
            );
        });
    }
    render () {
        return(
            this.showDefaultFolderID()
        );
    }
}

function mapStateToProps (state) {
    return {
        userINFO: state.userINFO.userINFO
    };
}

export default connect(mapStateToProps)(DefaultFolderID);
