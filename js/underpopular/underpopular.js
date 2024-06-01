function underpopular() {
  //underpopular of popularitems
  document
    .querySelector(".popularitem1")
    .addEventListener("click", function () {
      document.querySelector(".underpopular1").style.display = "block";
      document.querySelector(".underpopular2").style.display = "none";
    });
  document
    .querySelector(".popularitem2")
    .addEventListener("click", function () {
      document.querySelector(".underpopular1").style.display = "none";
      document.querySelector(".underpopular2").style.display = "block";
    });
}
export default underpopular;
