import React, { Fragment } from "react";

const List = props => {
  const renderError = () => {
    return (
      props.error &&
      Object.values(props.error).map((el, i) => {
        return <li key={i}>{el}</li>;
      })
    );
  };
  return <Fragment>{renderError()}</Fragment>;
};
export default List;
