import React from 'react'

function PopUp(props) { // props is an object, that will help trigger this popup
  return (props.trigger) ? ( // if props.trigger is true, then return the following
    <div className="popup">
        <div className="popup_inner">
            <button className="close-btn">close</button>
            { props.children }
        </div>
    </div>
  ) : ""; // if props.trigger is false, then return an empty string
}

export default PopUp
