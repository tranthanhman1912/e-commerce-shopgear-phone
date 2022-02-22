import React from 'react'

const Blog = (props) => {
  const { item } = props;
  return (
    <>
      <div className="blog__list">
        <div className="blog__list__item">
          <div className="blog__list__item__img">
          <img src={item.image.imgBlog} alt={item.image.imgBlog} />
          </div>
          <div className="blog__list__item__info">
            <div className="blog__list__item__info__status">
              {item.status === 1 ? (
                <span className="blog__list__item__info__status--news">News</span>
              ) : (
                <span className="blog__list__item__info__status--old">Old</span>
              )}
            </div>
            <div className="blog__list__item__info__title">
              {item.name}
            </div>
            <div className="blog__list__item__info__desc">  {item.desc}</div>
          </div>
          <div className="blog__list__item__footer">
            <div className="blog__list__item__footer__author">
            
                <img src={item.image.imgUser} alt={item.image.imgUser} />
                <h1>{item.user}</h1>
              </div>
            
            <div className="blog__list__item__footer__date">{item.date}</div>
          </div>
        </div>
      </div>
    </>
    
  )
}

export default Blog