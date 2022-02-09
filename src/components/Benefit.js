import React, { useState } from "react";
import PropTypes from "prop-types";

const Benefit = (props) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={`benefit ${hover ? "isHover" : ""}`}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <div className="benefit__icon">
        <i className={props.icon}></i>
      </div>
      <div className="benefit__info">
        <div className="benefit__info__name">{props.name}</div>
        <div className="benefit__info__description">{props.description}</div>
      </div>
    </div>
  );
};

Benefit.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string,
  description: PropTypes.string,
};

export default Benefit;
