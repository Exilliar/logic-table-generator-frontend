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
  // select the 0th element as all objects will have the same keys
  Object.keys(operators[0]).forEach((key) => {
    html += `<th>${key}</th>`;
  });
  html += "</tr>";

  // add data
  operators.forEach((op) => {
    html += "<tr>";
    Object.entries(op).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        html += `<td style="text-wrap: none">${value
          .map((v) => `${v}<br> <br>`)
          .join("")}</td>`;
      } else {
        html += `<td>${value}</td>`;
      }
    });
    html += "</tr>";
  });
  html += "</table>";

  return html;
}
