const info1out = async () => {
  try {
    let data = await fetch("http://localhost:3000/info1out");
    let res = await data.json();
    console.log(res);
    let out1 = res.map((elem) => {
      return `<h5>${elem.h5}</h5><h2>${elem.h2}</h2><div></div><a href="#"><h4>${elem.h4}<span><img src=${elem.source1} /></span></h4></a><h6>${elem.h6}<span><img src=${elem.source2} /></span></h6>`;
    });
    document.querySelector(".info1").insertAdjacentHTML("beforeend", out1);
  } catch (error) {
    console.log(error.message);
  }
};
export default info1out;
