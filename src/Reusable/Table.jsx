import React from "react";
const Table = props => {
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
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.gender}</td>
              <td>{item.email}</td>
              <td>{item.phoneNo}</td>
            </tr>
          );
        })
      )
    );
  };
  return (
    <table className="ui celled table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Email</th>
          <th>Phone number</th>
        </tr>
      </thead>
      <tbody>{renderRow()}</tbody>
    </table>
  );
};
export default Table;
