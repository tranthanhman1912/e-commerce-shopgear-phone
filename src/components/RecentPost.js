import React from "react";

const RecentPost = (props) => {
  const { item } = props;
  return (
    <div className="blog__recentPost">
      <div className="blog__recentPost__item">
        <div className="blog__recentPost__item__img">
          <img src={item.img} alt={item.img} />
        </div>
        <div className="blog__recentPost__item__info">
          <h2> {item.name}</h2>
          <p> {item.date}</p>
        </div>
      </div>
    </div>
  );
};

export default RecentPost;
