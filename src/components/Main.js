import React from "react";
import "../css/main.css";

const Main = () => {
  return (
    <>
      <main className="main">
        <div className="inner">
          <div className="main-top">
            <div className="main-top-slide br-20">
              {/* <!-- Start 상단 슬라이드 --> */}
              <div className="swiper topslide">
                <div className="swiper-wrapper">{/* 데이터연동 */}</div>
                <div className="swiper-pagination"></div>
              </div>
              {/* <!-- End 상단 슬라이드 --> */}
            </div>
            <div className="main-top-banner br-20">
              {/* <!-- Start 타이틀 배너 --> */}
              <div className="swiper bannerslide">
                <div className="swiper-wrapper">
                  {/* <!-- 외부 데이터 연동 --> */}
                </div>
                <div className="swiper-pagination"></div>
              </div>
              {/* <!-- End 타이틀 배너 --> */}
            </div>
          </div>
          <div className="main-bottom">
            <div className="main-bottom-list">
              {/* <!-- 새글 리스트 --> */}
              <div className="main-bottom-list-news">
                <h2>NEW. 따끈따끈 새로 나온 글 🔥</h2>
                <div className="list-wrap" id="news">
                  {/* <!-- 데이터 연동 --> */}
                </div>
              </div>
              {/* <!-- 배너 --> */}
              <div className="main-bottom-list-banner br-20">
                <a href="#" className="list-banner-link"></a>
              </div>
              {/* <!-- 추천글 리스트 --> */}
              <div className="main-bottom-list-picks">
                <h2>Editor’s Pick 🏃🏻‍♀️🏃‍♂️🏃🏽</h2>
                <div className="list-wrap" id="crew">
                  {/* <!-- 외부 데이터 연동 --> */}
                </div>
                <div className="bt-wrap">
                  <a href="#" className="bt-more">
                    더보기
                  </a>
                </div>
              </div>
            </div>
            <div className="main-bottom-cards">
              <h2>폴더 📁</h2>
              {/* <!-- 카드 슬라이드 --> */}
              <div className="main-bottom-cards-slide">
                {/* <!-- 외부데이터 연동 --> */}
                <div className="swiper cardslide">
                  <div className="swiper-wrapper">
                    {/* <!-- 슬라이드들을 배치 --> */}
                  </div>
                </div>
              </div>

              <div className="bt-wrap">
                <a href="#" className="bt-more">
                  전체보기
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
