window.addEventListener("load", function () {
  function showLine() {
    // 브라우저의 스크롤바 위치를 파악해야함
    // 현재 스크롤바의 위치값 알아내기
    let scY = window.scrollY;
    // scY 즉, 스크롤바의 위치가 0 보다 크면 스크롤 된거다
    // header 에 라인의 css를 적용한다.

    //document = html, querySelector = css
    const header = document.querySelector(".header");
    if (scY > 0) {
      // header 객체, 즉, DOM 에 css 목록에 추가하자 (클래스명)
      header.classList.add("line-active");
    } else {
      // header 객체, 즉, DOM 에 css 제거에 추가하자 (클래스명)
      header.classList.remove("line-active");
    }
  }

  showLine();

  window.addEventListener("scroll", function () {
    showLine();
  });
});
