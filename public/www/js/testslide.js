window.addEventListener("load", function () {
  const dataUrl = "./apis/topslide.json";

  fetch(dataUrl)
    .then((resp) => {
      const data = resp.json();

      return data;
    })
    .then((result) => {
      let slideTags = "";

      for (let i = 0; i < result.lenght; i++) {
        const data = result[i];

        const test = ``;

        slideTags += test;
      }
    })
    .catch((error) => {
      console.log(error);
    });
});
