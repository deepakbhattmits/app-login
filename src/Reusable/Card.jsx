import React from "react"

const Card = props => {
  const defaultCss = {
    width: "100px",
    height: "100px",
    boxShadow: "0 0 10px #444",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "5px"
  };
  return (
    <div className="card-container">
      <div
        style={{
          ...defaultCss,
          backgroundColor: props.color ? props.color : "transparent"
        }}
      >
        {props.title}
      </div>
    </div>
  );
};
export default Card;
