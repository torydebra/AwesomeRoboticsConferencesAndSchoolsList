           
$(document).ready(function() {

    const years = ["2022", "2023", "2024"];
    const types = ["conf", "school"];
        
    dataTableColumns = [
        { 
            data: "shortName",
            render: addLinkRender,
        },
        { 
            data: "name",
        },
        { 
            data: "start",
            render: dateRender,
        },
        { 
            data: "end",
            render: dateRender,
        },
        { 
            data: "deadline",
            render: dateRender,
        },
        { 
            data: "city",
            render: addAddressLinkRender,
        },
        { 
            data: "country",
            className: 'f32', // css style used for world-flags-sprite
            render: drawFlagRender,
        },
        { 
            data: "link",
            visible: false,
            searchable: false,
        },  
        { 
            data: "addressLink",
            visible: false,
            searchable: false,
        },  
        { 
            data: "type",
            visible: false,
            searchable: false,
        },    
    ];
        
    years.forEach((year) => {
    types.forEach((type) => {
        
        addTableContainer(type, year, dataTableColumns);

        $.getJSON("data/" + type + year + ".json", function(data) {
        
            var jsondata = data;
            
            addIfNotExist(jsondata, dataTableColumns);

            $("#" + type + year).DataTable({
                data: jsondata,
                columns: dataTableColumns,
                order: [[2, 'asc']],
                lengthMenu: [
                    [50, -1],
                    [50, 'All'],
                ],
            });

        })
        .fail(function(jqXHR, textStatus, errorThrown) { console.log('getJSON request failed! ' + textStatus); })
        .done(function() {})



    });
    });


});
