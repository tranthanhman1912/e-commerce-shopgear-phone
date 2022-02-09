import React from 'react';
import PropTypes from 'prop-types';
const ContactIcon = (props) => {
  return (
    <div className="contact__icon" >
        <div className="contact__icon__item">
            <a href="/" >
                <i className={props.facebook}></i>
            </a>
        </div>
        <div className="contact__icon__item">
            <a href="/" >
                <i className={props.instagram}></i>
            </a>
        </div>
        <div className="contact__icon__item">
            <a href="/" >
                <i className={props.github}></i>
            </a>
        </div>
        <div className="contact__icon__item">
            <a href="/" >
                <i className={props.google}></i>
            </a>
        </div>
        <div className="contact__icon__item">
            <a href="/" >
                <i className={props.twitter}></i>
            </a>
        </div>
    </div>
  );
};
ContactIcon.propTypes = {
    facebook : PropTypes.string.isRequired,
    instagram : PropTypes.string.isRequired,
    github : PropTypes.string.isRequired,
    google : PropTypes.string.isRequired,
    twitter : PropTypes.string.isRequired,
}
export default ContactIcon;
