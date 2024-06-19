const info1 = async () => {
  try {
    let data = await fetch("http://localhost:3000/info");
    let res = await data.json();
    console.log(res);
    let info = res.map((elem) => {
      return `<h3>${elem.text}<span><img src=${elem.source} /></span></h3>`;
    });
    document.querySelector(".info1 div").insertAdjacentHTML("beforeend", info);
  } catch (error) {
    console.log(error.message);
  }
};
export default info1;
