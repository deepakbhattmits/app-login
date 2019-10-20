import React from "react";

// import createBrowserHistory from "../Components/history";
import Button from "./Button";

const Modal = props => {
  // const [open, setOpen] = useState(true)
  const { open, close, matchedData, children } = props
  // const close = () => {
  //   setOpen(false)

  //   // createBrowserHistory.push('/dashboard')
  // }

  console.log("Modal Rendered mini", matchedData);
  return (
    <div
      name='close'
      className={`ui dimmer modals page transition ${
        open ? "animating fade in visible active" : "hidden"
        }`}
      onClick={close}
    >
      <div
        className={`ui mini test modal scrolling transition ${
          open ? "animating scale in visible active" : "hidden"
          }`}
        onClick={e => e.stopPropagation()}
      >
        <i className="close icon" onClick={close} />
        <div className="header">Delete Your Account</div>
        <div className="content">
          {children}
        </div>
        <div className="actions">
          <Button className="ui black deny button" onClick={close}>
            Nope
          </Button>
          <Button className="ui positive right labeled icon button">
            Yep, that's me
            <i className="checkmark icon" />
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
