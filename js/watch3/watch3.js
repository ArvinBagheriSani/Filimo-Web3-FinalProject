const watch3 = async () => {
  try {
    let data = await fetch("http://localhost:3000/watch3");
    let res = await data.json();
    console.log(res);
    let w3 = res.map((elem) => {
      return `<div class="watchinfo"><h3>${elem.h3}</h3><h4>${elem.h4}</h4><p class="marginr2">${elem.p1}</p><p>${elem.p2}</p></div><div class="watchimg"><img src=${elem.source1} /></div>`;
    });
    document.querySelector(".watch3").insertAdjacentHTML("beforeend", w3);
  } catch (error) {
    console.log(error.message);
  }
};
export default watch3;
