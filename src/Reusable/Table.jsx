import React, { useState, useCallback, Fragment } from "react"
import Modal from '../Reusable/Modal'
import ModalMini from '../Reusable/ModalMini'
import { useSelector } from 'react-redux'
// import result from 'lodash/result'
// import { Link } from 'react-router-dom'
import Button from "./Button"
const Table = props => {
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [matchedData, setMatchedData] = useState({});
  // const [title, setTitle] = useState('')
  const editItem = useSelector(state => state.Auth.user);
  const show = useCallback(e => {
    const { id, name } = e.target
    let matchedData =
      editItem &&
      editItem.map(el => el.filter(item => item.id === parseInt(id)));
    matchedData.map(el => console.log('TEST: ', el['firstName']))
    setMatchedData(matchedData);
    if (name === 'edit') {
      setOpenEdit(true)
    } else if (name === 'delete') {
      setOpenDelete(true)
    }


  }, [editItem]);
  const close = useCallback(() => {
    setOpenEdit(false)
    setOpenDelete(false)
  },
    [],
  )

  const renderRow = () => {
    if (!props.user) {
      return <div>Loading...</div>;
    }
    return (
      props.user &&
      props.user.map(el =>
        el.map((item, i) => {
          return (
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.profession}</td>
              <td>
                {/* <Link to={`/edit/${item.id}`}> */}
                <Button
                  id={item.id}
                  name='edit'
                  className="ui button yellow"
                  onClick={show}
                  title="Edit Record"
                >

                  <i className="icon edit outline" /> Edit
                  </Button>
                {/* </Link> */}

                {/* <Link to={`/delete/${item.id}`}> */}
                <Button
                  id={item.id}
                  name='delete'
                  className="ui button negative"
                  onClick={show}
                  title="Delete Record"
                >

                  <i className="icon trash alternate outline" />
                  Delete
                    </Button>
                {/* </Link> */}
              </td >
            </tr >
          );
        })
      )
    );
  };
  return (

    < Fragment >
      <table className="ui celled table">
        <thead>
          <tr>
            <th>Id</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Profession</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{renderRow()}</tbody>
      </table>
      {openEdit ?
        <Modal open={openEdit} close={close} matchedData={matchedData}>
          {`Edit : ${matchedData}`}
        </Modal>
        : null
      }
      {openDelete ?
        <ModalMini open={openDelete} close={close} matchedData={matchedData} >
          {`Delete : ${matchedData}`}
        </ModalMini>
        : null
      }
    </Fragment >
  );
};
export default Table;
