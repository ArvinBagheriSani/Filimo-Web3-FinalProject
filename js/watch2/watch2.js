const watch2 = async () => {
  try {
    let data = await fetch("http://localhost:3000/watch2");
    let res = await data.json();
    console.log(res);
    let w2 = res.map((elem) => {
      return `<div class="watchimg"><img src=${elem.source1} /></div><div class="watchinfo"><h3>${elem.h3}</h3><h4>${elem.h4}</h4><h5><span><img src=${elem.source2} /></span>${elem.h51}</h5><h6>${elem.h61}</h6><h5><span><img class="marginl1" src=${elem.source3} /></span>${elem.h52}</h5><h6>${elem.h62}</h6><p>${elem.p}</p></div>`;
    });
    document.querySelector(".watch2").insertAdjacentHTML("beforeend", w2);
  } catch (error) {
    console.log(error.message);
  }
};
export default watch2;
