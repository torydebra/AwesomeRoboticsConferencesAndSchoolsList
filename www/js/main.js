
//jquyery style includes
//$.getScript("js/drawFlagRender.js");
            

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
            render: addLinkRender,
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
            //render: dateRender,
        },
        { data: "period" },
        { data: "city" },
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
            });

        })
        .fail(function(jqXHR, textStatus, errorThrown) { console.log('getJSON request failed! ' + textStatus); })
        .done(function() {})



    });
    });


});
