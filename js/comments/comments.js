const comments = async () => {
  try {
    let data = await fetch("http://localhost:3000/swiper4");
    let res = await data.json();
    console.log(res);
    let com = res.map((elem) => {
      return `<div class="swiper-slide"><h4><span><img src=${elem.source} /></span>${elem.name}</h4><p>${elem.text}</p></div>`;
    });
    document.querySelector(".swiper4 div").insertAdjacentHTML("beforeend", com);
  } catch (error) {
    console.log(error.message);
  }
};
export default comments;
