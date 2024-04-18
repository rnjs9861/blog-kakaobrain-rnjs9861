// DOM 을 다루려고 하는 목적인 경우
window.addEventListener("load", function () {
  //1. 외부에서 자료를 불러온다.
  const dataUrl = "./apis/topslide.json";

  fetch(dataUrl)
    .then((response) => {
      // Step 1. 자료 받아서 json 변경하기
      // 토큰을 js의 데이터로 변경하기
      const data = response.json();
      // 변환된 결과를 돌려주기
      return data;
    })
    .then((result) => {
      // Step 2. json 변경된 데이터 활용하기
      // 전체 글자 모음

      let slideTags = "";

      for (let i = 0; i < result.length; i++) {
        const data = result[i];
        // 템플릿 문법 필요(html 생성)
        const test = `<div class="swiper-slide">
          <a href="${data.url}" style="background:url('./images/${data.pic}') no-repeat center; background-size: cover;">
            <p class="slide-title">
              ${data.title}
            </p>
          </a>
        </div>`;
        slideTags += test;
      }
      // 원하는 장소에 출력해 보자.
      const whereTag = document.querySelector(".topslide .swiper-wrapper");
      whereTag.innerHTML = slideTags;

      //기본코드를 넣어보자.
      const topSlide = new Swiper(".topslide", {
        loop: true,
        speed: 800,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination-bullet-active",
          clickable: "true",
        },
      });
      const logos = document.querySelector(".topslide");

      logos.addEventListener("mouseenter", function () {
      topSlide.autoplay.stop();
      
     })

      logos.addEventListener("mouseleave", function(){
      topSlide.autoplay.start();
     });
    })

    .catch((error) => {
      console.log(error);
    });


    

  //then->성공했을때 catch->에러 났을때

  //2. 자료를 이용해서 슬라이드에 배치할 html 을 만든다.
  //3. html 완성후 swiper 를 생성한다.
});