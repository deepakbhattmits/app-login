import React, { Component } from 'react'
import createBrowserHistory from "./history";
import Modal from '../Reusable/Modal'

class Edit extends Component {
    // renderMached = () => {
    //     return (
    //         matchedData &&
    //         matchedData.map(el => {
    //             return (
    //                 <div key={el.id}>
    //                     {el.firstName}
    //                     {el.lastName}
    //                     {el.profession}
    //                 </div>
    //             );
    //         })
    //     );
    // };
    render() {
        return (
            <div>

                <Modal dashboard={createBrowserHistory} />
                {/* {renderMached()} */}
                {/* </Modal> */}
            </div>
        )
    }
}
export default Edit
