document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('tableForm');
    const tableContainer = document.getElementById('tableContainer');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const columns = document.getElementById('columns').value;
        const rows = document.getElementById('rows').value;

        if (columns && rows) {
            let tableHTML = '<table>';
            for (let i = 0; i < rows; i++) {
                tableHTML += '<tr>';
                for (let j = 0; j < columns; j++) {
                    tableHTML += '<td>KITM</td>';
                }
                tableHTML += '</tr>';
            }
            tableHTML += '</table>';
            tableContainer.innerHTML = tableHTML;
        }
    });
});