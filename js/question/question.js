const question = async () => {
  try {
    let data = await fetch("http://localhost:3000/question");
    let res = await data.json();
    console.log(res);
    let ques = res.map((elem) => {
      return `<h2>${elem.h2}</h2><h3>${elem.h3}</h3><div class="q1">${elem.q1}<span>${elem.span}</span><div class="a1">${elem.a1}</div></div><div class="q2">${elem.q2}<span>${elem.span}</span><div class="a2">${elem.a2}</div></div><div class="q3">${elem.q3}<span>${elem.span}</span><div class="a3">${elem.a3}</div></div><div class="q4">${elem.q4}<span>${elem.span}</span><div class="a4">${elem.a4}</div></div>`;
    });
    document.querySelector(".questions").insertAdjacentHTML("beforeend", ques);
  } catch (error) {
    console.log(error.message);
  }
};
export default question;
