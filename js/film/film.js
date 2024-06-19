const film = async () => {
  try {
    let data = await fetch("http://localhost:3000/film");
    let res = await data.json();
    console.log(res);
    let flm = res.map((elem) => {
      return `<a href="#"> ${elem.text} <span></span></a>`;
    });
    document.querySelector(".film").insertAdjacentHTML("beforeend", flm);
  } catch (error) {
    console.log(error.message);
  }
};
export default film;
