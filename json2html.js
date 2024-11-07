// json2html.js
export default function json2html(data) {
  // Create the table string
  let html = '<table data-user="psiricharana@gmail.com">';
  
  // Add the table header row
  html += '<thead><tr>';
  
  // Dynamically create the table headers based on the keys of the first object
  if (data.length > 0) {
    Object.keys(data[0]).forEach(key => {
      html += `<th>${key}</th>`;
    });
  }
  
  html += '</tr></thead><tbody>';
  
  // Add the table rows
  data.forEach(item => {
    html += '<tr>';
    Object.keys(item).forEach(key => {
      html += `<td>${item[key]}</td>`;
    });
    html += '</tr>';
  });
  
  html += '</tbody></table>';
  
  // Return the generated HTML table
  return html;
}
