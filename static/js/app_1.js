// importing data.js
const tableData = data;

// referencing html table using D3
var tbody = d3.select('tbody');

function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // Append a row to the table body
        let row = tbody.append("tr");
        // Loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}

function handleClick() {
    // grabbing datetime value from the filter
    let date = d3.select('#datetime').property('value');
    let filteredData = tableData;
    // check to see if date was entered and filter the date using that date
    if (date) {
        // apply 'filter' to table data to only keep rows where the 
        // 'datetime' value matches filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    // rebuilding table using filtered data
    // @NOTE: if no date was entered, then filteredData will
    // just be the original tableData
    buildTable(filteredData);
}

// creating filter-btn id to link to button tag in html
//(attaching event to listen for form button)
d3.selectAll('#filter-btn').on('click', handleClick);

// building table with original data when page loads
buildTable(tableData);




