window.addEventListener("load", function () {
  const dataUrl = "./apis/banner.json";
  fetch(dataUrl)
    .then((response) => {
      const result = response.json();
      return result;
    })
    .then((result)=>{

    });
});


