import React from "react";

const DropDown = props => {
  const handleChange = e => {
    props.onChange(e);
  };
  const renderOptions = () => {
    return (
      props &&
      Object.values(props.options).map((el, i) => {
        return (
          <option key={i} value={el}>
            {el.toUpperCase()}
          </option>
        );
      })
    );
  };
  return (
    <select
      className={`ui search dropwdown`}
      onChange={handleChange}
      value={props.value}
      name={props.name}
      multiple={props.multiple}
    >
      {renderOptions()}
    </select>
  );
};
export default DropDown;
