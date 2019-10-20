import React from "react";

const Button = props => {
  const { id, type, name, className, onClick, title, children } = props
  return (
    <button
      id={id ? id : ""}
      name={name ? name : ''}
      type={type ? type : ""}
      className={className ? className : ""}
      onClick={onClick}
      title={title ? title : ""}
    >
      {children}
    </button>
  );
};
export default Button;
