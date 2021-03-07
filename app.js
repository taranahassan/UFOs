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
};

// creating filter-btn id to link to button tag in html
//(attaching event to listen for form button)
d3.selectAll('#filter-btn').on('click', handleClick);

// building table with original data when page loads
buildTable(tableData);




