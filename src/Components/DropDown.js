/*
Drop Down Component to show the dymanic content in dropdown.
Props Needed : 
        1. pass {content} prop in the form of an array (JSON array)
        2. pass {name} prop in the form of a string
        3. pass {id} prop in the form of a string
*/
import React from "react";
import PropTypes from "prop-types";
import "../scss/DropDown.scss";
const DropDown = (props) => {
  return (
    <div className="drop-down" id={props.id}>
      <button className="drop-down-btn" id={props.id + "-btn"}>
        {props.name}
      </button>
      <div className="drop-down-content" id={props.id + "-content"}>
        {props.content.map((value, index) => (
          // eslint-disable-next-line
          <a key={props.id + value + index}>{value}</a>
        ))}
      </div>
    </div>
  );
};

DropDown.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  content: PropTypes.array,
};

export default DropDown;
