$(document).ready(function() {

    $.fn.dataTable.ext.buttons.past = {
        text: 'Hiding Past',
        className: 'btn-secondary btn-sm',
        action: pastButtonOnClick
    }; 
    $.fn.dataTable.ext.buttons.pastDeadline = {
        text: 'Showing Past Deadline',
        className: 'btn-info btn-sm',
        action: pastDeadlineButtonOnClick
    }; 

    $.fn.dataTable.ext.search.push(pastFilter);
    $.fn.dataTable.ext.search.push(pastDeadlineFilter);

    const years = ["2022", "2023", "2024"];
    const types = ["conf", "school"];
        
    dataTableColumnsConf = [
        {
            orderable: false,
            data: null,
            defaultContent: '',
            title: "",
        },
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
            orderable: false,
            data: null,
            defaultContent: '',
            title: '',
        },
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

            var table = $("#" + type + year).DataTable({
                
                data: jsondata,
                columns: dataTableColumns,
                order: [[3, 'asc']],
                lengthMenu: [
                    [50, -1],
                    [50, 'All'],
                ],
                "rowCallback": colorRow,
                "initComplete": function (setting, json) {
                    $('#' + type + year + ' [data-toggle="popover"]').popover();
                    
                },
                //first row default was (without buttons) with -12 and - 16 :
                //"<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>>"
                dom: "<'row'<'col-sm'l><'col-sm'B><'col-sm'f>>" +
                        "<'row'<'col-sm-12'tr>>" +
                        "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
                buttons: {        
                    buttons: [
                        'past',
                        'pastDeadline',
                    ],
                    dom: {
                        container: {
                            className: 'dt-buttons text-center flex-wrap',
                            tag: "div"
                        }
                    }
                }
            });
            
            // Add event listener for opening and closing details
            addButtonNoteListener(table, type, year);


        })
        .fail(function(jqXHR, textStatus, errorThrown) { console.log('getJSON request failed! ' + textStatus + ' ' + errorThrown); })
        .done(function() {})
    });
    });
    



});
