           
$(document).ready(function() {

    const years = ["2022", "2023", "2024"];
    const types = ["conf", "school"];
        
    dataTableColumns = [
        { 
            data: "shortName",
            title: "Acronym",
            render: addLinkRender,
        },
        { 
            data: "name",
            title: "Name",
        },
        { 
            data: "start",
            title: "Start Date",
            render: dateRender,
        },
        { 
            data: "end",
            title: "End Date",
            render: dateRender,
        },
        { 
            data: "deadline",
            title: "Deadline",
            render: dateRenderDeadline,
        },
        { 
            data: "city",
            title: "Location",
            render: addAddressLinkRender,
        },
        { 
            data: "country",
            title: "Country",
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
                "rowCallback": colorRow,
            });

        })
        .fail(function(jqXHR, textStatus, errorThrown) { console.log('getJSON request failed! ' + textStatus); })
        .done(function() {})



    });
    });


});
