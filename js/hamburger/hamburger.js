const hamburger = async () => {
  try {
    let data = await fetch("http://localhost:3000/hamburger");
    let res = await data.json();
    console.log(res);
    let hambur = res.map((elem) => {
      return `<div><a href="#">${elem.txt}</a></div>`;
    });
    document
      .querySelector(".mobilemenu nav")
      .insertAdjacentHTML("beforeend", hambur);
  } catch (error) {
    console.log(error.message);
  }
};
export default hamburger;
