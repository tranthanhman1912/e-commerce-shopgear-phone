import React, { useEffect, useState } from "react";
import Grid from "./Grid";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {removeItem,updateItem} from "../redux/features/cartItem/cartItemSlice"
const CartItem = (props) => {
  const [item, setItem] = useState(props.item);
  const [quantity, setQuantity] = useState(props.item.e.quantity);
  const dispatch = useDispatch();

  useEffect(() => {
    setItem(props.item);
    setQuantity(props.item.e.quantity);
  }, [props.item]);
  
  const changeQuantity = (type) => {
    if (type === "PLUS") {
      dispatch(
        updateItem({
          ...item.e,
          quantity: quantity + 1,
        })
      )
    } else {
      dispatch(
        updateItem({
          ...item.e,
          quantity : quantity - 1 < 1 ? 1 : quantity - 1,
        })
      )
   
    }
  };
  
  const handleRemoveItem = () => {
    dispatch(
      removeItem(item.e)
    )
  }
  return (
    <div className="cart__item">
      <div className="cart__item__info">
        <Grid col={5} mdCol={2} smCol={1} gap={30}>
          <div className="cart__item__info__img">
            <Link to={`/product/${item.e.slug}`}>
              <img src={item.product.image.imgAvt} alt="" />
            </Link>
          </div>
          <div className="cart__item__info__name">
            <Link to={`/product/${item.e.slug}`}>
              {`${item.product.name} - ${item.e.color} - ${item.e.capacity}`}
            </Link>
          </div>
          <div className="cart__item__info__price">{item.e.price} đ</div>
          <div className="cart__item__info__quantity">
            <div className="product__detail__right__item__quantity justify-flex-start">
              <div className="product__detail__right__item__quantity__btn"
              onClick={() =>changeQuantity("MINUS")}
              >
                <i className="bx bx-minus"></i>
              </div>
              <div className="product__detail__right__item__quantity__label">
                {item.e.quantity}
              </div>
              <div className="product__detail__right__item__quantity__btn"
                  onClick={() =>changeQuantity("PLUS")}
              >
                <i className="bx bx-plus"></i>
              </div>
            </div>
          </div>
          <div className="cart__item__info__del"
            onClick={handleRemoveItem}
          >
            <i className="bx bx-trash"></i>
          </div>
        </Grid>
      </div>
    </div>
  );
};

export default CartItem;
