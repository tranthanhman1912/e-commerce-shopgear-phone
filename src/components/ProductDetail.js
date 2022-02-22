import React from "react";
import PropTypes from "prop-types";
import { Section, SectionBody, SectionTitle } from "../components/Section";
import {useParams} from "react-router-dom";
//api
import productData from "../api/product";
import ProductDetailView from "./ProductDetailView";
import Grid from "./Grid";
import ProductCard from "./ProductCard";
const ProductDetail = () => {
  const relatedProduct = productData.getProducts(8);
  const { slug } = useParams();
  const product = productData.getProductBySlug(slug);
  return (
    <Section>
      <SectionBody>
        <ProductDetailView product={product}/>
      </SectionBody>
      <Section>
        <SectionTitle>Related Products</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={30}>
            {relatedProduct.map((item, index) => (
              <ProductCard key={item.id} data={item} />
            ))}
          </Grid>
        </SectionBody>
      </Section>
    </Section>
  );
};

export default ProductDetail;
