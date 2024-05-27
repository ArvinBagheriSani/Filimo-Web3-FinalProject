const topslider = async () => {
  try {
    let data = await fetch("http://localhost:3000/topslider");
    let res = await data.json();
    let topslider = res.map((elem) => {
      return `<div class="swiper-slide"><img src=${elem.src}></div>`;
    });
    document
      .querySelector(".swiper div")
      .insertAdjacentHTML("beforeend", topslider);
  } catch (error) {
    console.log(error.message);
  }
};
export default topslider;
