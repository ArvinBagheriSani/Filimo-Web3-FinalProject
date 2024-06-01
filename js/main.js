//full modular
import free from "./free/free.js";
import hamburger from "./hamburger/hamburger.js";
import hamburgercfg from "./hamburgercfg/hamburgercfg.js";
import questions from "./questions/questions.js";
import slidercfg from "./slidercfg/slidercfg.js";
import stickyfooter from "./stickyfooter/stickyfooter.js";
import topslider from "./topslider/topslider.js";
import underpopular from "./underpopular/underpopular.js";
async function alldata() {
  await stickyfooter();
  await topslider();
  await hamburger();
  await free();
  slidercfg();
  underpopular();
  questions();
  hamburgercfg();
}
alldata();
