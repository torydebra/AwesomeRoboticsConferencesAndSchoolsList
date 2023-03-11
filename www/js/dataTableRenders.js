function drawFlagRender(data, type, row, meta) {
    
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

function addLinkRender(data, type, row, meta) {
    //row has all the other column data of this row!
    
   if (type === 'display') {
       
        let link = row['link'];

        return '<a href="' + link + '">' + data + '</a>';
    }

    return data;
}

function dateRender(data, type, row, meta) {
    //row has all the other column data of this row!
                console.log(data)
   if (type === 'display') {
       
        if (data) {
            console.log(row);
            const date = luxon.DateTime.fromFormat(data, "y-MM-dd");
            const humanReadable = date.toLocaleString(luxon.DateTime.DATETIME_MED);

            console.log(humanReadable); // =>  October 22, 9:38 PM
            console.log(data); // =>  October 22, 9:38 PM
            
            data = "2023-07-12"
            
            return date.toFormat('d MMM');
        }
    }

    return data;
}


