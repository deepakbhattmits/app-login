import React, { Component } from 'react'
import Table from '../Reusable/Table'
import { connect } from "react-redux"

class UserData extends Component {
    render() {
        const { user } = this.props
        return (

            <Table user={user} />

        )
    }
}
const mapStateToProps = state => {
    return {
        user: state.Auth.user,
        isSignedIn: state.Auth.isSignedIn
    };
};
export default connect(
    mapStateToProps,
    null
)(UserData);
