import React from "react";
import EditForm from "../Components/EditForm";

const Modal = props => {
  return (
    <div
      className={`ui dimmer modals page transition animating ${
        props.visible ? "custom-dimmer fade in visible active" : "hidden"
      }`}
      onBlur={props.close}
    >
      <div
        className={`ui standard test modal scrolling transition animating ${
          props.visible
            ? "custom-modal scale in visible active"
            : "scale out hidden"
        }`}
      >
        <i className="close icon" onClick={props.close} />
        <div className="header">Profile Picture</div>
        <div className="content">
          <div className="description">
            <EditForm data={props.data} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
