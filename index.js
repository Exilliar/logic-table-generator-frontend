function expressionSubmit() {
  const form = document.getElementById("expressionForm");

  const expression = form.elements.expression.value;

  fetch(`https://ltg.api.rorywebber.co.uk/results/${expression}`).then((res) => {
    res.json().then((data) => {
      document.getElementById("table").innerHTML = table(data);
    });
  });
}
