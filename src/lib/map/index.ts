import mapHtml from "./web/data/html";
import mapScript from "./web/mapScript";

export const map = () => {
  const body = document.getElementsByTagName("body")[0];
  const el = document.createElement("div");
  el.classList.add("map");
  el.innerHTML = mapHtml;
  body.appendChild(el);
  mapScript();
};

export const delMap = () => {
  const map = document.getElementsByClassName("map")[0];
  map.remove();
};

export default { map, delMap };
