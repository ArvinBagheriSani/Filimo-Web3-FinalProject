const login = async () => {
  try {
    let data = await fetch("http://localhost:3000/login");
    let res = await data.json();
    console.log(res);
    let log = res.map((elem) => {
      return `<a href="#">${elem.text}</a>`;
    });
    document.querySelector(".login").insertAdjacentHTML("beforeend", log);
  } catch (error) {
    console.log(error.message);
  }
};
export default login;
