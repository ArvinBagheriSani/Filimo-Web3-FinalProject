const series = async () => {
  try {
    let data = await fetch("http://localhost:3000/series");
    let res = await data.json();
    console.log(res);
    let ser = res.map((elem) => {
      return `<a href="#">${elem.text}</a>`;
    });
    document.querySelector(".series").insertAdjacentHTML("beforeend", ser);
  } catch (error) {
    console.log(error.message);
  }
};
export default series;
