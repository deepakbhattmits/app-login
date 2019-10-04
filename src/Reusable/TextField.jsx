import React from "react";

const TextField = props => {
  return (
    <input
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
    />
  );
};
export default TextField;
