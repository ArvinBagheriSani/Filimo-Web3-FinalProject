const register = async () => {
  try {
    let data = await fetch("http://localhost:3000/register");
    let res = await data.json();
    console.log(res);
    let reg = res.map((elem) => {
      return `<a href="#"> ${elem.text}<span><img src= ${elem.source} alt="register" /></span></a>`;
    });
    document.querySelector(".register").insertAdjacentHTML("beforeend", reg);
  } catch (error) {
    console.log(error.message);
  }
};
export default register;
