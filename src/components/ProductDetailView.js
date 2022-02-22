import React, { useState } from "react";
import Banner from "./Banner";
import SystemProduct from "./SystemProduct";
import PolicyProduct from "./PolicyProduct";
import Grid from "../components/Grid";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { addItem } from "../redux/features/cartItem/cartItemSlice";

//toastify
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//API
import promotionData from "../api/promotion";
import { policyProductDetail } from "../api/policy";

const ProductDetailView = (props) => {
  const { product } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [color, setColor] = useState(undefined);
  const [capacity, setCapacity] = useState(undefined);
  const [quantity, setQuantity] = useState(1);
  const [price,setPrice] = useState(product.price)
  const [image , setImage] = useState(product.image.img01);

  const handleChangeImage = (img) => {
    setImage(img);
  }
  const check = () => {
    if (capacity === undefined) {
      toast.error("Vui lòng chọn dung lượng.");
      return false;
    }
    if (color === undefined) {
      toast.error("Vui lòng chọn màu sắc.");
      return false;
    }

    return true;
  };

  const addToCart = () => {
    if(check()){
      dispatch(
        addItem({
          slug: product.slug,
          color: color,
          capacity: capacity,
          quantity: quantity,
          price: price,
        }),
        toast.success("Thêm vào giỏ hàng thành công.")
      );
    }
   
  };

  const goToCart = () => {
    if(check()){
      dispatch(
        addItem({
          slug: product.slug,
          color: color,
          capacity: capacity,
          quantity: quantity,
          price: price,
        })
      );
      navigate("/cart");
    }
  };

  const changeQuantity = (type) => {
    if (type === "PLUS") {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
   
    }
  };

  return (
    <div className="product">
      <h1 className="product__title">Điện thoại {product.name}</h1>
      <div className="product__detail">
        <div className="product__detail__left">
          <div className="product__detail__left__img">
            <img src={image} alt="img main" className="product__detail__left__img__main"/>
            <div className="product__detail__left__img__child">
              <img src={product.image.img01} alt="img-01 " onClick={() => handleChangeImage(product.image.img01)}/>
              <img src={product.image.img02} alt="img-02 " onClick={() => handleChangeImage(product.image.img02)}/>
              <img src={product.image.img03} alt="img-03" onClick={() => handleChangeImage(product.image.img03)}/>
              <img src={product.image.img04} alt="img-04" onClick={() => handleChangeImage(product.image.img04)}/>
            </div>
          </div>
          <div className="product__detail__left__policy">
            <Grid col={2} mdCol={1} smCol={1} gap={30}>
              {policyProductDetail.map((item, index) => (
                <PolicyProduct
                  key={item.id}
                  icon={item.icon}
                  description={item.description}
                />
              ))}
            </Grid>
          </div>
          <img
            src={product.image.imgDesc}
            alt="img detail product "
            width="100%"
          />
        </div>

        <div className="product__detail__right">
          <div className="product__detail__right__item">
            {product.capacity.map((item, index) => (
              <div
                className={`product__detail__right__item__info product__detail__right__item__info__capacity 
              ${item === capacity ? "active" : ""}`}
                key={index}
                onClick={() => {
                  setCapacity(item);
                }}
              >
                {item}
              </div>
            ))}
          </div>
          <div className="product__detail__right__item">
            {product.colors.map((item, index) => (
              <div
                className={`product__detail__right__item__info product__detail__right__item__info__color 
              ${item === color ? "active" : ""}`}
                key={index}
                onClick={() => {
                  setColor(item);
                }}
              >
                {item}
              </div>
            ))}
          </div>
          <div className="product__detail__right__item">
            <div className="product__detail__right__item__quantity">
              <div
                className="product__detail__right__item__quantity__btn"
                onClick={() => changeQuantity("MINUS")}
              >
                -
              </div>
              <div className="product__detail__right__item__quantity__label">
                {quantity}
              </div>
              <div
                className="product__detail__right__item__quantity__btn"
                onClick={() => changeQuantity("PLUS")}
              >
                +
              </div>
            </div>
          </div>

          <div className="product__detail__right__item">
            <div className="product__detail__right__item__price">
              {price * quantity} đ
            </div>
          </div>
          <Banner
            image="	https://cdn.tgdd.vn/2022/01/banner/desk920x230-920x230-9.png"
            marginBottom={30}
          />
          <div className="product__detail__right__promotion">
            <div className="product__detail__right__promotion__top">
              <div className="product__detail__right__promotion__title">
                Khuuyến Mãi
              </div>
              <div className="product__detail__right__promotion__description">
                Giá và khuyến mãi dự kiến áp dụng đến 23:00 23/01
              </div>
            </div>
            <div className="product__detail__right__promotion__bottom">
              {promotionData.map((item, index) => (
                <div
                  className="product__detail__right__promotion__bottom__item"
                  key={index}
                >
                  <div className="product__detail__right__promotion__bottom__item__stt">
                    {item.id}
                  </div>
                  <div className="product__detail__right__promotion__bottom__item__title">
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="product__detail__right__status">Còn Hàng</div>
          <div className="product__detail__right__item">
            <button
              className="product__detail__right__item__btn"
              onClick={() => goToCart()}
            >
              Mua ngay
            </button>
            <button
              className="product__detail__right__item__btn"
              onClick={() => addToCart()}
            >
              Thêm vào giỏ hàng
            </button>
          </div>
          <SystemProduct product={product} />
          <div className="product__detail__right__desc">
            <div className={`product__detail__right__desc__info `}>
              <h3>Thông tin sản phẩm</h3>
              <p>{product.description}</p>
            </div>
            <div className="product__detail__right__desc__btn">
              <button>Xem thêm</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailView;
