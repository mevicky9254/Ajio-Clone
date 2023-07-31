import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";

import { Scrollbar, Autoplay } from "swiper";
import { Box } from "@chakra-ui/react";

const SliderM2 = () => {
  return (
    <Box
      w={{ base: "100%", md: "100%" }}
      mt={{ base: "0rem", md: "0rem", lg: ".2rem" }}
    >
      <Swiper
        scrollbar={{
          hide: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Scrollbar]}
    
      >
        <SwiperSlide>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/31032023-d-mhp-top-p5-royalson-carltonlondon-upto70.jpg"
            alt="img"
            style={{
              width: "100%",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.transition = "all 0.5s ease-in-out";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.transition = "all 0.5s ease-in-out";
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/31032023-d-mhp-top-p1-bullmer-beinghuman-min55.jpg"
            alt="img"
            style={{
              width: "100%",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.transition = "all 0.5s ease-in-out";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.transition = "all 0.5s ease-in-out";
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/31032023-d-mhp-top-p2-levis-uspa-min40.jpg"
            alt="img"
            style={{
              width: "100%",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.transition = "all 0.5s ease-in-out";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.transition = "all 0.5s ease-in-out";
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/31032023-d-mhp-top-p3-dnmx-teamspirit-starting199.jpg"
            alt="img"
            style={{
              width: "100%",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.transition = "all 0.5s ease-in-out";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.transition = "all 0.5s ease-in-out";
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/31032023-d-mhp-top-p4-cultsport-asics-upto60extraupto35.jpg"
            alt="img"
            style={{
              width: "100%",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.transition = "all 0.5s ease-in-out";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.transition = "all 0.5s ease-in-out";
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/31032023-d-mhp-top-p5-royalson-carltonlondon-upto70.jpg"
            alt="img"
            style={{
              width: "100%",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.transition = "all 0.5s ease-in-out";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.transition = "all 0.5s ease-in-out";
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/31032023-d-mhp-top-p2-levis-uspa-min40.jpg"
            alt="img"
            style={{
              width: "100%",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.transition = "all 0.5s ease-in-out";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.transition = "all 0.5s ease-in-out";
            }}
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  )
}

export default SliderM2