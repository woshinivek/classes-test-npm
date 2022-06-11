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

// function mult(x) {
//   let total = 1;

//   for (let i = 0; i < x; i++) {
//     total *= i + 1;
//   }

//   return total;
// }

// console.log(mult(5));

//---------------------------------------

// function factorial(n) {
//   // Если мы пытаемся найти факториал 1,
//   // возвращаем 1 — это базовый случай.
//   if (n <= 1) {
//     return 1;
//   }

//   // В остальных случаях
//   // возвращаем произведение n
//   // на факториал предыдущего числа —
//   // таким образом мы от n дойдём до 1,
//   // перебрав каждое число.

//   return n * factorial(n - 1);
// }

// factorial(5); // 120

// -------------------------------------------------------

// function countdown(n) {
//   if (n < 1) {
//     return [];
//   } else {
//     const countArr = countdown(n - 1);
//     countArr.unshift(n);

//     return countArr;
//   }
// }
// Only change code above this line

// console.log(countdown(5));

// -------------------------------------------------------

// function rangeOfNumbers(startNum, endNum) {
//   if (endNum < startNum) {
//     return [];
//   } else {
//   }

//   const countArr = rangeOfNumbers(startNum, endNum - 1);
//   countArr.push(endNum);

//   return countArr;
// }

// console.log(rangeOfNumbers(1, 5));
// console.log(rangeOfNumbers(6, 9));

// -------------------------------------------------------
// -------------------------------------------------------
