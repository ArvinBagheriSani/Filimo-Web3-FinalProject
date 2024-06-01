function questions() {
  //frequently asked questions
  document.querySelector(".q1").addEventListener("click", function () {
    document.querySelector(".a1").style.display = "block";
    document.querySelector(".q1").style.color = "#faaa3d";

    document.querySelector(".a2").style.display = "none";
    document.querySelector(".q2").style.color = "whitesmoke";

    document.querySelector(".a3").style.display = "none";
    document.querySelector(".q3").style.color = "whitesmoke";

    document.querySelector(".a4").style.display = "none";
    document.querySelector(".q4").style.color = "whitesmoke";
  });
  document.querySelector(".q2").addEventListener("click", function () {
    document.querySelector(".a1").style.display = "none";
    document.querySelector(".q1").style.color = "whitesmoke";

    document.querySelector(".a2").style.display = "block";
    document.querySelector(".q2").style.color = "#faaa3d";

    document.querySelector(".a3").style.display = "none";
    document.querySelector(".q3").style.color = "whitesmoke";

    document.querySelector(".a4").style.display = "none";
    document.querySelector(".q4").style.color = "whitesmoke";
  });
  document.querySelector(".q3").addEventListener("click", function () {
    document.querySelector(".a1").style.display = "none";
    document.querySelector(".q1").style.color = "whitesmoke";

    document.querySelector(".a2").style.display = "none";
    document.querySelector(".q2").style.color = "whitesmoke";

    document.querySelector(".a3").style.display = "block";
    document.querySelector(".q3").style.color = "#faaa3d";

    document.querySelector(".a4").style.display = "none";
    document.querySelector(".q4").style.color = "whitesmoke";
  });
  document.querySelector(".q4").addEventListener("click", function () {
    document.querySelector(".a1").style.display = "none";
    document.querySelector(".q1").style.color = "whitesmoke";

    document.querySelector(".a2").style.display = "none";
    document.querySelector(".q2").style.color = "whitesmoke";

    document.querySelector(".a3").style.display = "none";
    document.querySelector(".q3").style.color = "whitesmoke";

    document.querySelector(".a4").style.display = "block";
    document.querySelector(".q4").style.color = "#faaa3d";
  });
}
export default questions;
