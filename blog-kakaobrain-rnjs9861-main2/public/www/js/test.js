// 배열 맛보기

const newsList = [
  {
    img: "c1.jpg",
    title: "규칙 없는 게 규칙, 카카오브레인 미니컨을 소개합니다 🙌",
    day: "2024.04.09",
    link: "a.html",
    category: "Kcrew",
    cotegorycolor: "#0213416",
  },
  {
    img: "c2.jpg",
    title: "규칙 없는 게 규칙, 카카오브레인 미니컨을 소개합니다 🙌",
    day: "2024.04.09",
    link: "a.html",
    category: "Kcrew",
    cotegorycolor: "#0213416",
  },
  {
    img: "c3.jpg",
    title: "규칙 없는 게 규칙, 카카오브레인 미니컨을 소개합니다 🙌",
    day: "2024.04.09",
    link: "a.html",
    category: "Kcrew",
    cotegorycolor: "#0213416",
  },
  {
    img: "c4.jpg",
    title: "규칙 없는 게 규칙, 카카오브레인 미니컨을 소개합니다 🙌",
    day: "2024.04.09",
    link: "a.html",
    category: "Kcrew",
    cotegorycolor: "#0213416",
  },
];

for (let i = 0; i < 4; i++) {
  const obj = newsList[i];
  const html = ` <a href="${obj.link}" class="list-box">
      <div class="list-box-img br-20" style="background: url('./images/${obj.img}') no-repeat center; background-size: cover"></div>
      <div class="list-box-cate">
        <img src="./images/icon/ic_krew.png" alt="${obj.title}" />
        <span>${obj.category}</span>
      </div>
      <p class="list-box-title">${obj.title}</p>
      <span class="list-box-day">${obj.day}</span>
    </a>`;

  console.log(html);
}
