const search = async () => {
  try {
    let data = await fetch("http://localhost:3000/search");
    let res = await data.json();
    console.log(res);
    let srch = res.map((elem) => {
      return `<a href="#">${elem.text}<span><img src=${elem.source} alt="search" /></span></a>`;
    });
    document.querySelector(".search").insertAdjacentHTML("beforeend", srch);
  } catch (error) {
    console.log(error.message);
  }
};
export default search;
