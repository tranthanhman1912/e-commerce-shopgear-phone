import React, { useState } from "react";
import Banner from "../components/Banner";
import ProductCard from "../components/ProductCard";
import Grid from "../components/Grid";
//api
import productData from "../api/product";
import categorys from "../api/category";
const Product = () => {
  const productList = productData.getAllProducts();
  const [product, setProduct] = useState(productList);
  const [searchItem, setSearchItem] = useState("");
  const filterSelect = (item) => {
    const productFilter = productList.filter((e) => e.categorySlug === item);
    setProduct(productFilter);
  };
  const allProduct = () => {
    setProduct(productList);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(8);

  // Get curren page
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFristProduct = indexOfLastProduct - productPerPage;
  const currentProduct = product.slice(indexOfFristProduct, indexOfLastProduct);

   // Change page
   const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const changeCurrentPage = (type) => {
    if (type === "RIGHT") {
      if (Math.ceil(product.length / productPerPage) === currentPage) {
        return;
      } else {
        setCurrentPage(currentPage + 1);
      }
    } else {
      setCurrentPage(currentPage - 1 < 1 ? 1 : currentPage - 1);
    }
  };
    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(product.length / productPerPage); i++) {
      pageNumbers.push(i);
    }


  return (
    <>
      <Banner
        image="https://img3.thuthuatphanmem.vn/uploads/2019/10/08/banner-quang-cao-dien-thoai_103211774.jpg"
        marginBottom={70}
      />
      <div className="product">
        <div className="product__search">
          <input
            type="text"
            className="product__search__input"
            placeholder="Search..."
            onChange={(e) => {
              setSearchItem(e.target.value);
            }}
          />
          <i className="bx bx-search"></i>
        </div>
        <div className="product__filter">
          <button onClick={allProduct}>Tất cả</button>
          {categorys.map((item, index) => (
            <button
              onClick={() => filterSelect(item.categorySlug)}
              key={item.id}
            >
              {item.display}
            </button>
          ))}
        </div>
        <div className="product__content">
          <Grid col={4} mdCol={2} smCol={1} gap={30}>
            {currentProduct
              .filter((val) => {
                if (searchItem === "") {
                  return val;
                } else if (
                  val.name.toLowerCase().includes(searchItem.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((item) => (
                <ProductCard key={item.id} data={item} />
              ))}
          </Grid>
        </div>
      </div>

      <nav>
        <ul className="product__pagination">
          <li className="product__pagination__control" onClick={() => changeCurrentPage("LEFT")}>
            <i className="bx bx-chevron-left"></i>
          </li>
          {pageNumbers.map((item) => (
            <li className="product__pagination__item"
              key={item.id}
              onClick={() =>paginate(item) }
            >{item}</li>
          ))}
          
         
          <li className="product__pagination__control" onClick={() => changeCurrentPage("RIGHT")}>
            <i className="bx bx-chevron-right"></i>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Product;
