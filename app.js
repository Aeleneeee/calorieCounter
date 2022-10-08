const form = document.querySelector(".page-form");

const gender = document.querySelectorAll(".pick-item input");

const parameters = document.querySelectorAll(".parameter");

const age = document.querySelector("#parametr-age");

const weight = document.querySelector("#parametr-weight");

const height = document.querySelector("#parametr-height");

const radio_train = document.querySelectorAll(".train-item input");

const btn_submit = document.querySelector(".btn-submit");

const btn_reset = document.querySelector(".btn-reset");

const modal = document.querySelector(".information");

const normal = document.querySelector("#calories-norm");

const min = document.querySelector("#calories-min");

const max = document.querySelector("#calories-max");

let active = 1.2;

for (let radio of radio_train) {
  radio.addEventListener("input", function () {
    switch (radio.value) {
      case "min":
        active = 1.2;
        break;

      case "low":
        active = 1.375;
        break;

      case "medium":
        active = 1.55;
        break;

      case "hight":
        active = 1.725;
        break;

      case "very-hight":
        active = 1.9;
        break;
    }

    return active;
  });
}

for (let parameter of parameters) {
  parameter.addEventListener("input", function () {
    console.log(age.value);
    if (age.value == 0 || weight.value == 0 || height.value == 0) {
      btn_submit.disabled = true;
    } else {
      btn_submit.disabled = false;
    }

    if (age.value != 0 || weight.value != 0 || height.value != 0) {
      btn_reset.disabled = false;
    } else {
      btn_reset.disabled = true;
    }
  });
}

btn_submit.addEventListener("click", function (evt) {
  evt.preventDefault();

  modal.classList.remove("hidden");

  if ((gender.value = "male")) {
    normal.innerHTML = Math.round(
      (10 * weight.value + 6.25 * height.value - 5 * age.value + 5) * active
    );
  } else {
    normal.innerHTML = Math.round(
      (10 * weight.value + 6.25 * height.value - 5 * age.value - 161) * active
    );
  }

  min.innerHTML = Math.round(normal.innerHTML - normal.innerHTML * 0.15);

  max.innerHTML = Math.round(normal.innerHTML - -normal.innerHTML * 0.15);
});

btn_reset.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("hidden");
  form.reset();
});
