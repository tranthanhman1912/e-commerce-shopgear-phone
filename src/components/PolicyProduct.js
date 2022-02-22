import React from "react";
import PropTypes from "prop-types";
const PolicyProduct = (props) => {
  return (
    <div className="product__policy">
      <div className="product__policy__icon">
        <i className={props.icon}></i>
      </div>
      <div className="product__policy__description">{props.description}</div>
    </div>
  );
};
PolicyProduct.propTypes = {
  icon: PropTypes.string,
  description: PropTypes.string,
};
export default PolicyProduct;
