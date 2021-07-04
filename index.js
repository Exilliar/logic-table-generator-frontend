const url = "https://ltg.api.rorywebber.co.uk/results/"; // prod
// const url = "http://localhost:8080/results/"; // dev

function expressionSubmit() {
  const form = document.getElementById("expressionForm");

  const expression = form.elements.expression.value;

  fetch(url + expression).then((res) => {
    res.json().then((data) => {
      document.getElementById("table").innerHTML = table(data);
    });
  });
}
