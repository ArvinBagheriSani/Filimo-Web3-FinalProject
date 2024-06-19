const underpopular1 = async () => {
  try {
    let data = await fetch("http://localhost:3000/underpopular1");
    let res = await data.json();
    console.log(res);
    let popular1 = res.map((elem) => {
      return `<img src=${elem.source1} /><h3>${elem.h3}</h3><img class="zodiac" src=${elem.source2} /><h4>${elem.h4}</h4><h5 class="marginr1">${elem.h51}</h5><h5>${elem.h52}</h5><h6>${elem.h6}</h6><div class="swiper2 mySwiper2"><div class="swiper-wrapper"></div><div class="swiper-button-next"></div><div class="swiper-button-prev"></div></div>`;
    });
    document
      .querySelector(".underpopular1")
      .insertAdjacentHTML("beforeend", popular1);
  } catch (error) {
    console.log(error.message);
  }
};
export default underpopular1;
