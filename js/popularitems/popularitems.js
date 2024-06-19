const popularitems = async () => {
  try {
    let data = await fetch("http://localhost:3000/popularitems");
    let res = await data.json();
    console.log(res);
    let items = res.map((elem) => {
      return `<a href="#underpopular1"><div class="popularitem1"><img src=${elem.source1} /><p><span>${elem.span}</span>${elem.p}</p></div></a><a href="#underpopular2"><div class="popularitem2"><img src=${elem.source2} /><p><span>${elem.span}</span>${elem.p}</p></div></a><a href="#"><div><img src=${elem.source3} /><p><span>${elem.span}</span>${elem.p}</p></div></a><a href="#"><div><img src=${elem.source4} /><p><span>${elem.span}</span>${elem.p}</p></div></a><a href="#"><div><img src=${elem.source5} /><p><span>${elem.span}</span>${elem.p}</p></div></a><a href="#"><div><img src=${elem.source6} /><p><span>${elem.span}</span>${elem.p}</p></div></a>`;
    });
    document
      .querySelector(".popularitems")
      .insertAdjacentHTML("beforeend", items);
  } catch (error) {
    console.log(error.message);
  }
};
export default popularitems;
