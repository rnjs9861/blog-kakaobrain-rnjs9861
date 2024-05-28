import React, { useEffect, useRef, useState } from "react";
import SlideTopBannerItem from "./SlideTopBannerItem";
import { getBanner, getNews, getTopSlide } from "../apis/api";
// Swiper 활용
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const SlideTopBanner = () => {
  // js 코드 자리
  const whereTag = useRef(null);
  // 데이터
  const [topSlideData, setTopSlideData] = useState([]);
  //
  const swiperOption = {
    loop: true,
    pagination: true,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    modules: [Pagination],
  };

  const getBannerCall = async () => {
    const result = await getBanner();
    // 화면 갱신을 위해서 useState 로 담아야 한다.
    setTopSlideData(result);
  };

  useEffect(() => {
    getBannerCall();
    return () => {};
  }, []);

  return (
    <div className="main-top-banner br-20">
      <Swiper className="bannerslide" {...swiperOption}>
        {/* 데이터 출력 */}
        {topSlideData.map((item, index, arr) => (
          <SwiperSlide key={index}>
            <SlideTopBannerItem
              url={item.url}
              pic={item.pic}
              title={item.title}
            ></SlideTopBannerItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SlideTopBanner;
