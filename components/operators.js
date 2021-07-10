// interface for opeartors:
// interface OperatorDesc {
//     operator: string;
//     name: string;
//     desc: string;
//     examples: string[];
// }

function operatorDescriptions(operators) {
  let html = `<p>Available operators: ${operators.map((operator) => {
    return `${operator.operator} (${operator.name})`;
  }).join(", ")}`;
  return html;
}
