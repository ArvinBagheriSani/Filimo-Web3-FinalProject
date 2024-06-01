const stickyfooter = async () => {
  try {
    let data = await fetch("http://localhost:3000/stickyfooter");
    let res = await data.json();
    console.log(res);
    let stickyfooter = res.map((elem) => {
      return `<h6>${elem.text}</h6>`;
    });
    document
      .querySelector(".stickyfooter")
      .insertAdjacentHTML("beforeend", stickyfooter);
  } catch (error) {
    console.log(error.message);
  }
};
export default stickyfooter;
