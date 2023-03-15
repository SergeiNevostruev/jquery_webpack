import { delMap, map } from "./lib/map";
import "devextreme/integration/jquery";
import $ from "jquery";
import Button from "devextreme/ui/button";
import "devextreme/ui/button";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import "./style.css";
// import { alert as dialogAlert } from "devextreme/ui/dialog";

const rootEl = () => {
  const root = document.getElementById("root");
  const text = "Карта";
  const element = document.createElement("h1");
  element.innerText = text;
  element.classList.add("webpack");
  root?.appendChild(element);
  return element;
};

const el = rootEl();
let flag = false;

const clicker = (ev: MouseEvent) => {
  ev.preventDefault();
  if (flag) {
    delMap();
    flag = false;
    el.innerText = "Карта";
  } else {
    el.innerText = "Удалить карту";
    flag = true;
    map();
  }
};

el.onclick = clicker;

// const button = new Button($("#myButton"), {
//   text: "Нажми меня",
//   onClick: (e) => {
//     e.event?.preventDefault();
//     if (e.element.text() === "Карта") {
//       map();
//       e.element.text("Удалить карту");
//     } else {
//       delMap();
//       e.element.text("Карта");
//     }
//     e.element.css("padding", "10px");
//   },
// });
