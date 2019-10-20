import React from "react";
const Error = props => {
  // console.log(props);
  return (<div className='error'>
            {props.children} 
        </div>);
};
export default Error;
