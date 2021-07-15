const url = "https://ltg.api.rorywebber.co.uk/"; // prod
// const url = "http://localhost:8080/"; // dev

getOperators();

function expressionSubmit() {
  const form = document.getElementById("expressionForm");

  const expression = form.elements.expression.value;

  fetch(`${url}calculate/${expression}`).then((res) => {
    res.json().then((data) => {
      document.getElementById("results-table").innerHTML = table(data);
    });
  });
}

function getOperators() {
  fetch(`${url}operators`).then((res) => {
    res.json().then((data) => {
      document.getElementById("operators").innerHTML = operatorBasic(data);
      learnMoreListener(data);
    });
  });
}

function learnMoreListener(operatorDesc) {
  let open = false;

  document
    .getElementById("o-learn-more")
    .addEventListener("click", function (e) {
      e.preventDefault();
      const location = document.getElementById("operator-table");
      if (open) {
        location.innerHTML = "";
      } else {
        location.innerHTML = operatorTable(operatorDesc);
      }
      open = !open;
    });
}
