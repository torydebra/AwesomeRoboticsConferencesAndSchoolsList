function drawFlag(data, type) {
    if (type === 'display') {
        let country = '';

        switch (data) {
            case 'Argentina':
                country = 'ar';
                break;
            case 'Edinburgh':
                country = '_Scotland';
                break;
            case 'London':
                country = '_England';
                break;
            case 'New York':
            case 'San Francisco':
                country = 'us';
                break;
            case 'Sydney':
                country = 'au';
                break;
            case 'Tokyo':
                country = 'jp';
                break;
        }

        return '<span class="flag ' + country + '"></span> ' + data;
    }

    return data;
}


$(document).ready(function() {

    const years = ["2022", "2023"];
    const types = ["conf", "school"];
    
    years.forEach((year) => {
    types.forEach((type) => {
    
        $(function(){
            $("#" + type + year + "Container").load("html/" + type + year + ".html"); 
        
            $.getJSON("data/" + type + year + ".json", function(data) {
            
                var jsondata = data

                $("#" + type + year).DataTable({
                    data: jsondata,
                    columns: [
                        { data: "name" },
                        { data: "period" },
                        { data: "deadline" },
                        { data: "city" },
                        { 
                            data: "country",
                            className: 'f32', // used by world-flags-sprite library
                            render: function (data, type) {
                                if (type === 'display') {
                                    let country = '';

                                    switch (data) {
                                        case 'Argentina':
                                            country = 'ar';
                                            break;
                                        case 'Scotland':
                                            country = '_Scotland';
                                            break;
                                        case 'UK':
                                            country = '_England';
                                            break;
                                        case 'USA':
                                        case 'US':
                                            country = 'us';
                                            break;
                                        case 'Australia':
                                            country = 'au';
                                            break;
                                        case 'Japan':
                                            country = 'jp';
                                            break;
                                    }
             
                                    return '<span class="flag ' + country + '"></span> ' + data;
                                }
             
                                return data;
                            },
                        },
                        { data: "link" },  
                        { 
                            data: "type",
                            visible: false,
                            searchable: false,
                        },    
                    ],
                });

            })
            .fail(function(jqXHR, textStatus, errorThrown) { console.log('getJSON request failed! ' + textStatus); })
            .done(function() {})
        });


    });
    });


});
