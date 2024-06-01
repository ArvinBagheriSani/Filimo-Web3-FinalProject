const hamburger = async () => {
  try {
    let data = await fetch("http://localhost:3000/hamburger");
    let res = await data.json();
    console.log(res);
    let hamburger = res.map((elem) => {
      return `<div><a href="#">${elem.text}</a></div>`;
    });
    document
      .querySelector(".mobilemenu nav")
      .insertAdjacentHTML("beforeend", hamburger);
  } catch (error) {
    console.log(error.message);
  }
};
export default hamburger;
