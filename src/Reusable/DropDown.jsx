import React from "react";

// import PropTypes from "prop-types";

const DropDown = props => {
  // console.log("D", props);
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
// DropDown.propTypes = {
//   name: PropTypes.string,
//   onChange: PropTypes.func.isRequired
// };
export default DropDown;
