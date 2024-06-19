const freeout = async () => {
  try {
    let data = await fetch("http://localhost:3000/freeout");
    let res = await data.json();
    console.log(res);
    let fout = res.map((elem) => {
      return `<h3>${elem.h3}</h3><div class="swiper3 mySwiper3"><div class="swiper-wrapper"></div><div class="swiper-button-next"></div><div class="swiper-button-prev"></div></div>`;
    });
    document.querySelector(".free").insertAdjacentHTML("beforeend", fout);
  } catch (error) {
    console.log(error.message);
  }
};
export default freeout;
