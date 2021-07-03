// data interface:
// export interface Results {
//     letterValResults: {
//         letterVals: {
//             letter: string;
//             val: boolean;
//         }[];
//         result: boolean;
//     }[];
//     letters: string[];
// }
function table(data) {
    let html = "<table>";
    // add headers
    html += "<tr>";
    data.letters.forEach((letter) => {
        html += `<th>${letter}</th>`
    });
    html += "<th>Results</th></tr>";
    // add data
    data.letterValResults.forEach((lvr) => {
        html += "<tr>";
        lvr.letterVals.forEach((lv) => {
            html += `<td>${lv.val ? 1 : 0}</td>`;
        });
        html += `<td>${lvr.result ? 1 : 0}</td></tr>`;
    });
    // end table and return it
    html += "</table>";
    return html;
}