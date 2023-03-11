function addIfNotExist(jsonData, dataTableColumns) {
    
    jsonData.forEach((element) => {
    dataTableColumns.forEach((col) => {
        
        if (! element.hasOwnProperty(col["data"])) {
            element[col["data"]] = "";
        }
        
    });
    });
    
}

function addTableContainer(type, year, dataTableColumns) {
    
  let htmlCols = '';
  dataTableColumns.forEach((col) => {
    htmlCols += ('<th>' + col["data"] + '</th>\n');
  });
      
  const div = document.createElement('div');

  div.className = 'container';

  if (type === 'conf') {
  
    div.innerHTML = `
        <table id="`+ 'conf' + year +`" class="table table-hover table-striped" style="width:100%">
            <thead class="thead-dark">
                <tr>` + htmlCols + `</tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    `;
    
  } else if (type === 'school') {
          
    div.innerHTML = `
        <table id="`+ 'school' + year +`" class="table table-hover table-striped" style="width:100%">
            <thead class="thead-dark">
                <tr>` + htmlCols + `</tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    `; 
  }
    
  //document.getElementById('tableContainers').appendChild(div);
  $("#" + type + year + "Container").append(div); 
}

