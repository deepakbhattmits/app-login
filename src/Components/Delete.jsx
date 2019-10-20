import React, { Component } from 'react'

import createBrowserHistory from "./history";

import ModalMini from "../Reusable/ModalMini"
class Delete extends Component {
    render() {
        return (
            <div>
                <ModalMini dashboard={createBrowserHistory} />
            </div>
        )
    }
}
export default Delete
