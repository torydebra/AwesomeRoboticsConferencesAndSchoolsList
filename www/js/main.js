           
$(document).ready(function() {

    const years = ["2022", "2023", "2024"];
    const types = ["conf", "school"];
        
    dataTableColumnsConf = [
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
            defaultContent: "",
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
            defaultContent: "",
        },  
        { 
            data: "addressLink",
            visible: false,
            searchable: false,
            defaultContent: "",
        },  
        { 
            data: "type",
            visible: false,
            searchable: false,
        },    
        { 
            data: "note",
            visible: false,
            searchable: false,
            defaultContent: "",
        },    
    ];
    
    dataTableColumnsSchool = [
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
            defaultContent: "",
        },
        { 
            data: "cost",
            title: "Cost",
            render: costRender,
            orderable: false,
            defaultContent: "",
        },
        { 
            data: "costNote",
            visible: false,
            searchable: false,
            defaultContent: "",
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
            defaultContent: "",
        },  
        { 
            data: "addressLink",
            visible: false,
            searchable: false,
            defaultContent: "",
        },  
        { 
            data: "type",
            visible: false,
            searchable: false,
        },
        { 
            data: "note",
            visible: false,
            searchable: false,
            defaultContent: "",
        },
    ];
        
    years.forEach((year) => {
    types.forEach((type) => {
        
        let dataTableColumns = [];
        if (type === "conf") {
            dataTableColumns = dataTableColumnsConf;
        } else if (type === "school") {
            dataTableColumns = dataTableColumnsSchool;
        }
        
        addTableContainer(type, year, dataTableColumns);

        $.getJSON("data/" + type + year + ".json", function(data) {
        
            var jsondata = data;
            
            //solved with defaultContent option
            //addIfNotExist(jsondata, dataTableColumns);

            $("#" + type + year).DataTable({
                data: jsondata,
                columns: dataTableColumns,
                order: [[2, 'asc']],
                lengthMenu: [
                    [50, -1],
                    [50, 'All'],
                ],
                "rowCallback": colorRow,
                "initComplete": function (setting, json) {
                    $('#' + type + year + ' [data-toggle="popover"]').popover()
                }
            });

        })
        .fail(function(jqXHR, textStatus, errorThrown) { console.log('getJSON request failed! ' + textStatus + ' ' + errorThrown); })
        .done(function() {})
    });
    });
    



});
