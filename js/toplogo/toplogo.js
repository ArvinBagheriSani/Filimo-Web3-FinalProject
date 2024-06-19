const toplogo = async () => {
  try {
    let data = await fetch("http://localhost:3000/toplogo");
    let res = await data.json();
    console.log(res);
    let top = res.map((elem) => {
      return `<a href= ${elem.source2} ><img src= ${elem.source1} /></a>`;
    });
    document.querySelector(".toplogo").insertAdjacentHTML("beforeend", top);
  } catch (error) {
    console.log(error.message);
  }
};
export default toplogo;
