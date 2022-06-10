import { info, alert, error, success, defaults } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import "@pnotify/core/dist/Angeler.css";
// import "@pnotify/core/dist/Material.css";
// import "material-design-icons/iconfont/material-icons.css";
// defaults.styling = "material";
// defaults.icons = "material";

const btnRef = document.getElementById("myButton");
btnRef.addEventListener("click", onBtnClick);

function onBtnClick() {
  error({
    title: "ERROR",
    text: "Change options, and then click again",
  });

  //   info({
  //     title: "HI THERE",
  //     text: "If you want to get $1 million, start doing business with China",
  //   });
}

console.log(defaults);
