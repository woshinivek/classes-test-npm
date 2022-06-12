const robotWrapperRef = document.querySelector(".robot-icon__wrapper");

const controlBtnsRef = document.querySelector(".control-btns");

controlBtnsRef.addEventListener("click", controlBtnsRefClick);

function controlBtnsRefClick(evt) {
  console.log(evt);
  //   if (evt.traget.nodeName === "BUTTON") {
  //     console.log("botton");
  //   }
}
