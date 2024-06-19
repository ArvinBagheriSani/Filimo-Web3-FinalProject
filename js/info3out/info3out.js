const info3out = async () => {
  try {
    let data = await fetch("http://localhost:3000/info3out");
    let res = await data.json();
    console.log(res);
    let out3 = res.map((elem) => {
      return `<h2>${elem.h2}</h2><div></div><a href="#"><h4>${elem.h4}<span><img src=${elem.source1} /></span></h4></a>`;
    });
    document.querySelector(".info3").insertAdjacentHTML("beforeend", out3);
  } catch (error) {
    console.log(error.message);
  }
};
export default info3out;
