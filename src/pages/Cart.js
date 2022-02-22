import React,{useState,useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import Banner from "../components/Banner";
import { Link , useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";
import Grid from "../components/Grid";
//api
import productData from "../api/product";
import { toast } from "react-toastify";
import {useUserAuth} from "../context/UserAuthContext";
//API
function Cart(props) {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems.value);
  const [cartProduct, setCartProduct] = useState([]);
  const [totalProduct, setTotalProduct] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const { user } = useUserAuth();
  const handlePayment =() => {
    if(check()){
      localStorage.clear();
      toast.success(" Thanh toán thành công , chúc bạn mua hàng vui vẻ .");
      navigate("/");
    } 
  }

  const check = () => {
    if (!user) {
      alert("Vui lòng đăng nhập.");
      navigate("/login");
      return false;
    }
    return true;
  };
  useEffect(() => {
    setCartProduct(productData.getCartItemDetails(cartItems));
    setTotalProduct(
      cartItems.reduce((total, item) => total + Number(item.quantity), 0)
    );
    setTotalPrice(
      cartItems.reduce(
       (total,item) => total + Number(item.price) * Number(item.quantity) , 0
      )
    );
  }, [cartItems]);
  return (
    <>
      <Banner
        image="https://magiamgialazada.vn/wp-content/uploads/2018/01/voucher-bi-mat-lazada-khuyen-mai-tet-am-lich-2018-truyen-nhan-sam-tet.png"
        marginBottom={50}
      />
      <div className="cart">
        <div className="cart__left">
          <div className="cart__left__title">
            <Grid col={5} mdCol={2} smCol={1} gap={30}>
              <div>Thong tin san pham</div>
              <div></div>
              <div>Don Gia</div>
              <div>So luong</div>

              <div>Cap nhat
               </div>
            </Grid>
          </div>
          <div className="cart__left__list">
              {cartProduct.map((item, index) => (
                <CartItem key={index} item={item} />
              ))}

          </div>
        </div>
        <div className="cart__right">
          <div className="cart__right__info">
            <div className="cart__right__info__txt">
              <p>Shopping Bag ({totalProduct})</p>
              <div className="cart__right__info__price">
                <div>Thành tiền</div>
                <div>{totalPrice}</div>
              </div>
            </div>
            <div className="cart__right__info__btn">
            <button 
              onClick={handlePayment}
            >Đặt hàng</button>

            <button>
              <Link to="/product">Tiếp tục mua hàng</Link>
            </button>
          </div>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Cart;
