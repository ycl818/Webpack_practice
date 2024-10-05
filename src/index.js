import number from "./number";
import number2 from "./number2";

number();
number2();

if (module.hot) {
  module.hot.accept("./number2.js", function () {
    document.body.removeChild(document.getElementById("number2"));
    number2();
  }); // 接受热更新
}
