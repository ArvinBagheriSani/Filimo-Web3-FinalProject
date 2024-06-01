const free = async () => {
  try {
    let data = await fetch("http://localhost:3000/free");
    let res = await data.json();
    console.log(res);
    let free = res.map((elem) => {
      return `<div class="swiper-slide"><img src=${elem.source} alt="" /><p>${elem.text}</p></div>`;
    });
    document
      .querySelector(".swiper3 div")
      .insertAdjacentHTML("beforeend", free);
  } catch (error) {
    console.log(error.message);
  }
};
export default free;
