import React from "react";
import contact from "../api/contact";
const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__title">Hãy kết nối với chúng tôi</div>
      <div className="contact__banner">
        <img
          src="https://dien-thoai-dns.000webhostapp.com/FE/img/lienhe-mid1.jpg"
          alt=""
        />
        <img
          src="https://dien-thoai-dns.000webhostapp.com/FE/img/lienhe-mid2.jpg"
          alt=""
        />
      </div>

      {contact.map((item, index) => (
        <div className="contact__item" key={item.id}>
          <div className="contact__item__icon">
            <i className={item.icon}></i>{" "}
          </div>
          <div className="contact__item__info">
            <div className="contact__item__info__title mb-1">
                <h3>{item.title}</h3>
            </div>
            <div className="contact__item__info__decs">{item.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contact;
