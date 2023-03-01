import { Typography } from "@mui/material";
import React, { useState } from "react";
import { Autoplay, Keyboard, Mousewheel, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import bannerData from "../assets/data/bannerData";
import Document from "../components/title/Document";
import { useData } from "../configs/contextData";
import BannerHome from "../layouts/banner/BannerHome";
import ProductItem from "../layouts/product/ProductItem";
import ProductList from "../layouts/product/ProductList";
const Home = () => {
    const { products } = useData();
    
    return (

        <div className="mt-[74px]">
           
            <Document title="Bí kiếp làm giàu - Trang chủ" />
            <div className="h-screen max-w-full">
                <Swiper
                    cssMode={true}
                    navigation={true}
                    mousewheel={true}
                    keyboard={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    modules={[Navigation, Mousewheel, Keyboard, Autoplay]}
                    className="mySwiper"
                >
                    {bannerData.length > 0 &&
                        bannerData.map((item) => (
                            <SwiperSlide key={item.id}>
                                <BannerHome item={item} />
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
            <div>
                <div className="bg-[#F8F8F8] text-center">
                    <Typography variant="h3" component="div">
                        Bạn đang xem tất cả sản phẩm
                    </Typography>
                </div>
                <div className="container px-4 py-8 mx-auto">
                    <ProductList />
                </div>
                <div className="container px-4 py-8 mx-">
                    <h1 className="mb-10 font-semibold uppercase">
                        sản phẩm nổi bật
                    </h1>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper"
                    >
                        {products.slice(1, 8).map((product) => (
                            <SwiperSlide key={product.id}>
                                <ProductItem product={product}></ProductItem>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Home;
