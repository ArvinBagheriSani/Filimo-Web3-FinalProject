const watch1 = async () => {
  try {
    let data = await fetch("http://localhost:3000/watch1");
    let res = await data.json();
    console.log(res);
    let w1 = res.map((elem) => {
      return `<div class="watchinfo"><h3>${elem.h3}</h3><h4>${elem.h4}</h4><h5><span><img src=${elem.source1} /></span>${elem.h51}</h5><h6>${elem.h61}</h6><h5><span><img class="marginl1" src=${elem.source2} /></span>${elem.h52}</h5><h6>${elem.h62}</h6><h5><span><img src=${elem.source3} /></span>${elem.h53}</h5><h6>${elem.h63}</h6><p><span><img src=${elem.source4} /></span>${elem.p}</p></div><div class="watchimg"><img src=${elem.source5} /></div>`;
    });
    document.querySelector(".watch1").insertAdjacentHTML("beforeend", w1);
  } catch (error) {
    console.log(error.message);
  }
};
export default watch1;
