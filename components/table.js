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
    let html = `<table class="table w-50" style="min-width: 30rem;">`;
    // add headers
    html += "<tr>";
    data.letters.forEach((letter) => {
        html += `<th style="width: 5rem; text-align: center">${letter}</th>`
    });
    html += `<th style="width: 5rem; text-align: center">Results</th></tr>`;
    // add data
    data.letterValResults.forEach((lvr) => {
        html += "<tr>";
        lvr.letterVals.forEach((lv) => {
            html += `<td style="width: 5rem; text-align: center">${lv.val ? 1 : 0}</td>`;
        });
        html += `<td style="width: 5rem; text-align: center">${lvr.result ? 1 : 0}</td></tr>`;
    });
    // end table and return it
    html += "</table>";
    return html;
}