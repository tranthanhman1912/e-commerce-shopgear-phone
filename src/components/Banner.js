import React from 'react';
import PropTypes from 'prop-types';
const Banner = (props) => {
    const styles = {
        marginTop : props.marginTop ? `${props.marginTop}px` : "",
        marginBottom : props.marginBottom ? `${props.marginBottom}px` : ""

    }
    const image = props.image ? `${props.image}` : "";
  return (
   
    <div className="banner" style={styles}>
        <img src={image} alt="" />
    </div>
  );
};

Banner.propTypes = {
    image: PropTypes.string.isRequired,
    marginTop : PropTypes.number,
    marginBottom : PropTypes.number,

}

export default Banner;
