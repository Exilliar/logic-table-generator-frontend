// interface for opeartors  (operators is an array of this object):
// interface OperatorDesc {
//     operator: string;
//     name: string;
//     desc: string;
//     examples: string[];
// }

function operatorBasic(operators) {
  let html = `<p>Available operators: ${operators
    .map((operator) => {
      return `${operator.operator} (${operator.name})`;
    })
    .join(", ")}
    <button type="button" id="o-learn-more" class="btn btn-link ml-2">Learn more</button>`;
  return html;
}
