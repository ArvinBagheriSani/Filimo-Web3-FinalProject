const underonline = async () => {
  try {
    let data = await fetch("http://localhost:3000/underonline");
    let res = await data.json();
    console.log(res);
    let online = res.map((elem) => {
      return `<div class="under"><div class="under1"><img src= ${elem.source1} /></div><div class="under2"><h2>${elem.h2}</h2><h3><span><img src=${elem.source2} /></span>${elem.h3}</h3><h4>${elem.h4}</h4><h5>${elem.h51}</h5><h5>${elem.h52}</h5><a href="#"><h6>${elem.h6}</h6></a></div></div>`;
    });
    document
      .querySelector(".underonline")
      .insertAdjacentHTML("beforeend", online);
  } catch (error) {
    console.log(error.message);
  }
};
export default underonline;
