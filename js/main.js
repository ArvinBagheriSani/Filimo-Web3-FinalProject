//full modular
import register from "./register/register.js";
import black from "./black/black.js";
import film from "./film/film.js";
import free from "./free/free.js";
import hamburger from "./hamburger/hamburger.js";
import hamburgercfg from "./hamburgercfg/hamburgercfg.js";
import questions from "./questions/questions.js";
import search from "./search/search.js";
import series from "./series/series.js";
import slidercfg from "./slidercfg/slidercfg.js";
import stickyfooter from "./stickyfooter/stickyfooter.js";
import toplogo from "./toplogo/toplogo.js";
import topslider from "./topslider/topslider.js";
import underpopular from "./underpopular/underpopular.js";
import login from "./login/login.js";
import info1 from "./info1/info1.js";
import info2 from "./info2/info2.js";
import info3 from "./info3/info3.js";
import swiper21 from "./swiper21/swiper21.js";
import swiper22 from "./swiper22/swiper22.js";
import underonline from "./underonline/underonline.js";
import comments from "./comments/comments.js";
import info1out from "./info1out/info1out.js";
import popularnotes from "./popularnotes/popularnotes.js";
import underpopular1 from "./underpopular1/underpopular1.js";
import underpopular2 from "./underpopular2/underpopular2.js";
import watch1 from "./watch1/watch1.js";
import watch2 from "./watch2/watch2.js";
import watch3 from "./watch3/watch3.js";
import question from "./question/question.js";
import info2out from "./info2out/info2out.js";
import info3out from "./info3out/info3out.js";
import freeout from "./freeout/freeout.js";
import commentsout from "./commentsout/commentsout.js";
import popularitems from "./popularitems/popularitems.js";
async function alldata() {
  await black();
  await hamburger();
  hamburgercfg();
  await toplogo();
  await film();
  await series();
  await search();
  await register();
  await login();
  await topslider();
  await info1out();
  await info1();
  await popularnotes();
  await popularitems();
  await underpopular1();
  await swiper21();
  await underpopular2();
  await swiper22();
  underpopular();
  await watch1();
  await watch2();
  await freeout();
  await free();
  await watch3();
  await info2out();
  await info2();
  await underonline();
  await commentsout();
  await comments();
  await question();
  questions();
  slidercfg();
  await info3out();
  await info3();
  await stickyfooter();
}
alldata();
