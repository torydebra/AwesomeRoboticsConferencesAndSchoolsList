
var dataTableColumnsConf = [
    {
        orderable: false,
        data: null,
        defaultContent: '',
        title: "",
        className: "dtr-control",
    },
    { 
        data: "shortName",
        title: "Acronym",
        render: addLinkRender,
        responsivePriority: 1,
    },
    { 
        data: "name",
        title: "Name",
        render: nameRender,
        responsivePriority: 7,
    },
    { 
        data: "start",
        title: "Start Date",
        render: dateRender,
        responsivePriority: 2,
    },
    { 
        data: "end",
        title: "End Date",
        render: dateRender,
        responsivePriority: 4,
    },
    { 
        data: "deadline",
        title: "Deadline",
        render: dateRenderDeadline,
        defaultContent: "",
        responsivePriority: 6,
    },
    { 
        data: "city",
        title: "Location",
        render: addAddressLinkRender,
        responsivePriority: 5,
    },
    { 
        data: "country",
        title: "Country",
        className: 'text-center f32', // f32 css style used for world-flags-sprite
        render: drawFlagRender,
        responsivePriority: 3,
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
        title: "Note",
        searchable: false,
        className: "none",
        defaultContent: "",
    },    
];

var dataTableColumnsSchool = [
    {
        orderable: false,
        data: null,
        defaultContent: '',
        title: '',
        className: "dtr-control",
    },
    { 
        data: "shortName",
        title: "Acronym",
        render: addLinkRender,
        responsivePriority: 1,
    },
    { 
        data: "name",
        title: "Name",
        render: nameRender,
        responsivePriority: 8,
    },
    { 
        data: "start",
        title: "Start Date",
        render: dateRender,
        responsivePriority: 2,
    },
    { 
        data: "end",
        title: "End Date",
        render: dateRender,
        responsivePriority: 4,
    },
    { 
        data: "deadline",
        title: "Deadline",
        render: dateRenderDeadline,
        defaultContent: "",
        responsivePriority: 7,
    },
    { 
        data: "cost",
        title: "Cost",
        render: costRender,
        orderable: false,
        defaultContent: "",
        responsivePriority: 6,
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
        responsivePriority: 5,
    },
    { 
        data: "country",
        title: "Country",
        className: 'f32', // css style used for world-flags-sprite
        render: drawFlagRender,
        responsivePriority: 3,
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
        title: "Note",
        searchable: false,
        defaultContent: "",
        className: "none",
    },
];


$(document).ready(function() {

    $("#footer").load("/www/footer.html"); 

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

    var currentYear = new Date().getFullYear();
    var oldYears = [];
    var futureYears = [];

    for (var year = 2022; year < currentYear; year++) {
        oldYears.push(year.toString());
    }
    for (var year = currentYear; year <= 2024; year++) {
        futureYears.push(year.toString());
    }

    let type;
    var path = window.location.pathname;

    if (path.endsWith('conf.html')) {
        type = "conf";
    } else if (path.endsWith('school.html')) {
        type = "school";
    } else {
        console.error("path page: " + path);
    }

    let dataTableColumns = [];
    if (type === "conf") {
        dataTableColumns = dataTableColumnsConf;
    } else if (type === "school") {
        dataTableColumns = dataTableColumnsSchool;
    }
    
    addTableContainer(type, "Current", dataTableColumns);

    const filenames = [];

    futureYears.forEach((year) => {
        filenames.push("data/" + type + year + ".json");
    });

    Promise.all(filenames.map(url =>
        fetch(url).then(response => response.json())
    )).then(jsondata => {

        //solved with defaultContent option
        //addIfNotExist(jsondata, dataTableColumns);

        var table = $("#" + type + "Current").DataTable({
            
            data: jsondata.flat(),
            columns: dataTableColumns,
            order: [[3, 'asc']],
            lengthMenu: [
                [50, -1],
                [50, 'All'],
            ],
            "rowCallback": colorRow,
            "initComplete": function (setting, json) {
                $('#' + type + "Current" + ' [data-toggle="popover"]').popover();
                $('#' + type + "Current" + ' [data-toggle="tooltip"]').tooltip();
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
            },
            responsive: {
                details: {
                    renderer: responsiveRenderer,
                    type: "column"
                }
            }
        });

        addTableListeners(table)

    })
    .catch(error => {
        // Handle any errors
        console.error('promise to parse JSON failed! ', error);
    });



    //old years
    oldYears.forEach((year) => {
            
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
                    $('#' + type + year + ' [data-toggle="tooltip"]').tooltip();
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
                },
                responsive: {
                    details: {
                        renderer: responsiveRenderer,
                        type: "column"
                    }
                }
            });

            addTableListeners(table)

        })
        .fail(function(jqXHR, textStatus, errorThrown) { console.log('getJSON request failed! ' + textStatus + ' ' + errorThrown); })
        .done(function() {})
    });

});
