const url = "https://ltg.api.rorywebber.co.uk/"; // prod
// const url = "http://localhost:8080/"; // dev

getOperators();

function expressionSubmit() {
  const form = document.getElementById("expressionForm");

  const expression = form.elements.expression.value;

  fetch(`${url}calculate/${expression}`).then((res) => {
    res.json().then((data) => {
      document.getElementById("table").innerHTML = table(data);
    });
  });
}

function getOperators() {
  fetch(`${url}operators`).then((res) => {
    res.json().then((data) => {
      console.log("data:", data);
      document.getElementById("operators").innerHTML = operatorDescriptions(data);
    });
  });
}
