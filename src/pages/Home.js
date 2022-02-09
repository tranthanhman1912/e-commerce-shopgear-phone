import React from "react";
import Slider from "../components/Slider";
import { Section,  SectionBody, SectionTitle } from "../components/Section";
import Grid from "../components/Grid";
import Benefit from "../components/Benefit"
import ProductCard from "../components/ProductCard";
import Banner from "../components/Banner";
//--------API-----------
import benefitData from '../api/benefit';
import productData from '../api/product';
function Home() {
 
  return (
    <>
      <Slider />
      <Section>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={30}>
            {benefitData.map((item, index)=>(
              <Benefit 
                key={index}
                icon={item.icon}
                name={item.name}
                description={item.description}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>Sản Phẩm Nổi Bậc</SectionTitle>
        <SectionBody>
        <Grid col={4} mdCol={2} smCol={1} gap={30}>
            {productData.getProducts(4).map((item, index) => (
              <ProductCard key={item.id} data={item} />
            ))}
          </Grid>
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>Sản Phẩm Bán Chạy</SectionTitle>
        <SectionBody>
        <Grid col={4} mdCol={2} smCol={1} gap={30}>
            {productData.getProducts(4).map((item, index) => (
              <ProductCard key={item.id} data={item} />
            ))}
          </Grid>
        </SectionBody>
      </Section>
      <Banner
        image="https://www.viettablet.com/images/promo/47/tra-gop-0_-lai-suot-trong-3-thang-mobi-banner-viettablet.jpg"
        marginBottom={70}
        marginTop={70}
      />
      <Section>
        <SectionTitle>Sản Phẩm Có Liên Quan</SectionTitle>
        <SectionBody>
        <Grid col={4} mdCol={2} smCol={1} gap={30}>
            {productData.getProducts(8).map((item, index) => (
              <ProductCard key={item.id} data={item} />
            ))}
          </Grid>
        </SectionBody>
      </Section>
      <Banner
        image="https://img4.thuthuatphanmem.vn/uploads/2020/06/26/hinh-anh-banner-dien-may-thong-minh_033705387.png"
        marginBottom={70}
        marginTop={70}
      />
    </>
  );
};

export default Home;
