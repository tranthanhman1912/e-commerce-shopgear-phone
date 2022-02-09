import React, { useState } from "react";

const ProductCard = (props) => {
  const { data } = props;
  const [hover, setHover] = useState(false);

  return (
    <div className="product__card">
      <div
        className={`product__card__item ${hover ? "isHover" : ""}`}
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        <a href="/">
          <div className="product__card__item__img">
            <img src={data.image.imgAvt} alt={data.name} />
          </div>
          <div className="product__card__item__info">
            <h1 className="product__card__item__info__name">{data.name}</h1>
            <div className="product__card__item__info__price">
              <strong>{data.price - data.discount}&nbsp;đ&nbsp;&nbsp;</strong>
              <del>{data.price}&nbsp;đ&nbsp;&nbsp;</del>
            </div>
            <div className="product__card__item__info__rate">
              {data.evaluate === 1 ? (
                <>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bx-star"></i>
                  <i className="bx bx-star"></i>
                  <i className="bx bx-star"></i>
                </>
              ) : data.evaluate === 2 ? (
                <>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bx-star"></i>
                  <i className="bx bx-star"></i>
                  <i className="bx bx-star"></i>
                </>
              ) : data.evaluate === 3 ? (
                <>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bx-star"></i>
                  <i className="bx bx-star"></i>
                </>
              ) : data.evaluate === 4 ? (
                <>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bx-star"></i>
                </>
              ) : (
                <>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                </>
              )}
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
