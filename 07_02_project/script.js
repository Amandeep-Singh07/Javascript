const form = document.querySelector("form");
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener("submit", function (e) {
  e.preventDefault();                            // prevent the default behaviour of form submission

  const height = parseInt(document.querySelector("#height").value); // we have converted the string value to integer
  const weight = parseInt(document.querySelector("#weight").value);// we have converted the string value to integer
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    
    // i want to print both the bmi and overweght or underweight
    results.innerHTML = `<span>${bmi}  </span>`;
    if (bmi < 18.5) {
      results.innerHTML += `<span>You are underweight</span>`;
    } else if (bmi >= 18.5 && bmi < 24.9) {
      results.innerHTML += `<span>Your weight is normal</span>`;
    } else if (bmi >= 25 && bmi < 29.9) {
      results.innerHTML += `<span>You are overweight</span>`;
    } else {
      results.innerHTML += `<span>You are obese</span>`;
    }

  }
});
