// interface for opeartors (operators is an array of this object):
// interface OperatorDesc {
//     operator: string;
//     name: string;
//     desc: string;
//     examples: string[];
// }

function operatorTable(operators) {
  let html = `<table class="table">`;
  // add headers
  html += "<tr>";
  Object.keys(operators[0]).forEach((key) => {
    // select the 0th element as all objects will have the same keys
    html += `<th>${key}</th>`;
  });
  html += "</tr>";

  // add data
  operators.forEach((op) => {
    html += "<tr>";
    Object.entries(op).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        html += `<td><ul>${value
          .map((v) => `<li>${v}</li>`)
          .join("")}</ul></td>`;
      } else {
        html += `<td>${value}</td>`;
      }
    });
    html += "</tr>";
  });
  html += "</table>";

  return html;
}
