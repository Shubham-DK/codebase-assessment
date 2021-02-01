/*
Drop Down Component to show the dymanic content in dropdown.
Props Needed in below sequence:
        1. pass {name} prop in the form of a string
        2. pass {id} prop in the form of a string 
        3. pass {content} prop in the form of an array (JSON array)      
*/
import React from "react";
import PropTypes from "prop-types";
import "../scss/DropDown.scss";
const DropDown = ({ name, id, content }) => {
  return (
    <div className="drop-down" id={id}>
      <button className="drop-down-btn" id={id + "-btn"}>
        {name}
      </button>
      <div className="drop-down-content" id={id + "-content"}>
        {content.map((value, index) => (
          // eslint-disable-next-line
          <a key={id + value + index}>{value}</a>
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
