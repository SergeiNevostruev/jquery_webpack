import $ from "jquery";
import "./mapStyle.css";
import { regions } from "./data/regions";
import { regionsAlias } from "./data/regionsAlias";

export default () => {
  $("path").hover(
    function (e) {
      $("path").css("fill", "#fff");
      $(".indicator").html("");
      let id = $(this).attr("id")?.toUpperCase();
      if ($(this).attr("name")) {
        let name = $(this).attr("name");
        $("<div>" + name + "</div>").appendTo(".indicator");
      }
      $(this).css("fill", "#f6e72d");
      $("path").not(this).css("fill", "rgba(0,0,0,0.5)");
      $(".indicator")
        .css({ top: e.pageY, left: e.pageX + 30 })
        .show();
    },
    function () {
      $(".indicator").html("");
      $(".indicator").hide();
      $("path").css("fill", "rgba(0,0,0,0.2)");
    }
  );
  let idAarr = regionsAlias;
  let idAarr2 = regions;
  $("path").each(function () {
    let regId = $(this).attr("id");
    let flag = "";
    let name = "";
    for (let j = 0; j < idAarr2.length; j++) {
      if (regId == idAarr2[j][0]) {
        name = idAarr2[j][1];
        flag = "flags/" + idAarr2[j][2];
        $(this).attr("name", name);
        $(this).attr("flag", flag);
      }
    }
    let regIdDiv =
      '<div class="reg" >' +
      "[" +
      "<span>" +
      regId +
      "</span>" +
      "]" +
      " " +
      name +
      "</div>";
    $(regIdDiv).appendTo(".regs");
  });

  $(".reg").hover(
    function (e) {
      let id = $(this).find("span").text();
      const idHover = "#" + id;
      $(idHover).css("fill", "#f6e72d");
    },
    function () {
      $(".indicator").html("");
      $(".indicator").hide();
      $("path").css("fill", "rgba(0,0,0,0.2)");
    }
  );
};
