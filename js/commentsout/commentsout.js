const commentsout = async () => {
  try {
    let data = await fetch("http://localhost:3000/commentsout");
    let res = await data.json();
    console.log(res);
    let cout = res.map((elem) => {
      return `<h3>${elem.h3}</h3><div class="swiper4 mySwiper4"><div class="swiper-wrapper"></div></div>`;
    });
    document.querySelector(".comments").insertAdjacentHTML("beforeend", cout);
  } catch (error) {
    console.log(error.message);
  }
};
export default commentsout;
