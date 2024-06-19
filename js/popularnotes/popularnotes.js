const popularnotes = async () => {
  try {
    let data = await fetch("http://localhost:3000/popularnotes");
    let res = await data.json();
    console.log(res);
    let notes = res.map((elem) => {
      return `<h3>${elem.h3} </h3><h4>${elem.h4} </h4><h5>${elem.h5} </h5>`;
    });
    document
      .querySelector(".poplularnote")
      .insertAdjacentHTML("beforeend", notes);
  } catch (error) {
    console.log(error.message);
  }
};
export default popularnotes;
