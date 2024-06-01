function hamburgercfg() {
  //hamburger menu mobile-tablet
  document.querySelector(".mobilemenu").addEventListener("click", function () {
    document.querySelector(".mobilemenu").style.right = "-100%";
  });
  document.querySelector(".movement").addEventListener("click", function () {
    document.querySelector(".mobilemenu").style.right = "0";
  });
}
export default hamburgercfg;
