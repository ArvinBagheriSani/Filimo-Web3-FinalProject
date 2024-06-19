const black = async () => {
  try {
    let data = await fetch("http://localhost:3000/black");
    let res = await data.json();
    console.log(res);
    let blk = res.map((elem) => {
      return `<span><img src=${elem.source} alt="search" />${elem.text}</span>`;
    });
    document.querySelector(".black").insertAdjacentHTML("beforeend", blk);
  } catch (error) {
    console.log(error.message);
  }
};
export default black;
