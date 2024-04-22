window.addEventListener("load", function () {
  //html에 내용 출력하기
  const makeHtml = (_result) => {
    let allTag = "";
    const crew = document.querySelector("#crew");

    const total = _result.length;

    // 아래 코드는 최적화 실패
    // for (let i = 0; i < total; i++) {
    //   const obj = _result[i];
    //   const tag = `<a href="${obj.link}" class="list-box">
    //   <div
    //     class="list-box-image br-20"
    //     style="
    //       background: url('./images/${obj.imgpath}') no-repeat center;
    //       background-size: cover;
    //     "
    //   ></div>
    //   <div class="list-box-cate">
    //     <img src="./images/icon/${obj.icon}" alt="카카오브레인" />
    //     <span>${obj.category}</span>
    //   </div>
    //   <p class="list-box-title">
    //     ${obj.title}
    //   </p>
    //   <span class="list-box-day">${obj.day}</span> </a
    // >`;
    //   allTag += tag;
    //   console.log(obj);
    // }

    // 추천합니다. (조건은 대상이 배열인 경우)
    _result.forEach((item) => {
      const tag = `<a href="${item.link}" class="list-box">
      <div
        class="list-box-image br-20"
        style="
          background: url('./images/${item.imgpath}') no-repeat center;
          background-size: cover;
        "
      ></div>
      <div class="list-box-cate">
        <img src="./images/icon/${item.icon}" alt="카카오브레인" />
        <span>${item.category}</span>
      </div>
      <p class="list-box-title">
        ${item.title}
      </p>
      <span class="list-box-day">${item.day}</span> </a
    >`;
      allTag += tag;
    });

    crew.innerHTML = allTag;
  };

  //화살표 함수 연습
  function say(_who) {
    console.log("안녕", _who, this);
  }

  const sayArrow = (_who) => {
    console.log("안녕", _who, this);
  };

  // this 의 차이
  const btWrap = document.querySelector(".bt-wrap");
  btWrap.addEventListener("click", function () {
    console.log(this);
  });
  btWrap.addEventListener("click", () => {
    console.log(this);
  });

  const dataUrl = "./apis/crew.json";
  this.fetch(dataUrl)
    .then((response) => {
      console.log(response);
      const result = response.json();
      return result;
    })
    .then((result) => {
      say("홍길동");
      sayArrow("둘리");
      makeHtml(result);
    })
    .catch((error) => {
      console.log(error);
    });
});
