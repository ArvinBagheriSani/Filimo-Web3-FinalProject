const swiper21 = async () => {
  try {
    let data = await fetch("http://localhost:3000/swiper21");
    let res = await data.json();
    console.log(res);
    let swiper = res.map((elem) => {
      return `<div class="swiper-slide"><img src=${elem.source} /><p>${elem.text}</p></div>`;
    });
    document
      .querySelector(".underpopular1 .swiper2 div")
      .insertAdjacentHTML("beforeend", swiper);
  } catch (error) {
    console.log(error.message);
  }
};
export default swiper21;
