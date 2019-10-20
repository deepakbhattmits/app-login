import React from "react"
import Button from './Button'

const Modal = props => {
  // const [open, setOpen] = useState(true)
  // const close = () => {
  //   setOpen(false)
  //   createBrowserHistory.push('/dashboard')
  // }
  const { open, close, matchedData } = props
  console.log("Modal Rendered standard", matchedData);
  return (
    <div
      name='close'
      className={`ui dimmer modals page transition ${
        open ? "animating fade in visible active" : "hidden"
        }`}
      onClick={close}
    >
      <div
        className={`ui standard test modal scrolling transition ${
          open ? "animating scale in visible active" : "hidden"
          }`}
        onClick={e => e.stopPropagation()}
      >

        <i className="close icon" onClick={close} />
        <div className="header">Profile Picture</div>
        <div className="image content">
          <div className="ui medium image">
            <img src="/images/avatar/large/chris.jpg" alt="pro-pic" />
          </div>
          <div className="description">{props.children}</div>
        </div>
        <div className="actions">
          <Button className="ui black deny button" onClick={close}>
            Nope
          </Button>
          <Button className="ui positive right labeled icon button">
            Yep
            <i className="checkmark icon" />
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
