import React, { useEffect, useRef, useState } from "react";
import SlideTopBannerItem from "./SlideTopBannerItem";
import { getBanner, getNews, getTopSlide } from "../apis/api";

const SlideTopBanner = () => {
  // js 코드 자리
  const whereTag = useRef(null);
  // 데이터
  const [topSlideData, setTopSlideData] = useState([]);

  const getBannerCall = async () => {
    const result = await getBanner();
    // 화면 갱신을 위해서 useState 로 담아야 한다.
    setTopSlideData(result);
    const bannerSlide = new Swiper(".bannerslide", {
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  };

  useEffect(() => {
    getBannerCall();
    return () => {};
  }, []);

  return (
    <div className="main-top-banner br-20">
      <div className="swiper bannerslide">
        <div className="swiper-wrapper" ref={whereTag}>
          {/* 데이터 출력 */}
          {topSlideData.map((item, index, arr) => (
            <SlideTopBannerItem
              key={index}
              url={item.url}
              pic={item.pic}
              title={item.title}
            ></SlideTopBannerItem>
          ))}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default SlideTopBanner;
