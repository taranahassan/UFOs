// importing data.js
const tableData = data;

// referencing html table using D3
var tbody = d3.select('tbody');

function buildTable(data) {
    // clearing existing data
    tbody.html('');
}

// looping through each object in data
// and appending row and cells for each value in row
data.forEach((dataRow) => {
    // appending a row to table body
    let row = tbody.append('tr');
    // looping through each field in dataRow and adding
    Object.values(dataRow).forEach((val) => {
        let cell = row.append('td');
        cell.text(val);
     }
    );
});