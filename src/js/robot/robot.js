const formFieldRef = document.querySelector(".form-field");
const robotIconWrapperRef = document.querySelector(".robot-icon__wrapper");
const robotFieldRef = document.querySelector(".robot__field");

formFieldRef.addEventListener("submit", onFormSubmit);

const coords = {};

function onFormSubmit(evt) {
  evt.preventDefault();

  const formData = new FormData(evt.target);
  const submittedData = {};

  formData.forEach((value, key) => {
    submittedData[key] = Number(value);
  });

  if (
    submittedData["x"] > robotFieldRef.clientWidth - 50 ||
    submittedData["y"] > robotFieldRef.clientHeight - 50
  ) {
    return;
  }
  robotIconWrapperRef.style.transform = `translate(${submittedData["x"]}px, ${submittedData["y"]}px)`;
}
