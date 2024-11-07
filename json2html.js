export default function json2html(data) {
    const columns = ["Name", "Age", "Gender"];
    let html = `<table data-user="ch.rashmitha2003@gmail.com">
        <thead>
            <tr>${columns.map(col => `<th>${col}</th>`).join('')}</tr>
        </thead>
        <tbody>
            ${data.map(row => `
                <tr>${columns.map(col => `<td>${row[col] ?? ""}</td>`).join('')}</tr>
            `).join('')}
        </tbody>
    </table>`;
    return html;
}
