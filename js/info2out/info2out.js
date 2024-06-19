const info2out = async () => {
  try {
    let data = await fetch("http://localhost:3000/info2out");
    let res = await data.json();
    console.log(res);
    let out2 = res.map((elem) => {
      return `<h2>${elem.h2}</h2><div></div>`;
    });
    document.querySelector(".info2").insertAdjacentHTML("beforeend", out2);
  } catch (error) {
    console.log(error.message);
  }
};
export default info2out;
