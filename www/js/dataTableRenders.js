const countryList = {
  Afghanistan: 'AF',
  'Aland Islands': 'AX',
  Albania: 'AL',
  Algeria: 'DZ',
  'American Samoa': 'AS',
  Andorra: 'AD',
  Angola: 'AO',
  Anguilla: 'AI',
  Antarctica: 'AQ',
  'Antigua And Barbuda': 'AG',
  Argentina: 'AR',
  Armenia: 'AM',
  Aruba: 'AW',
  Australia: 'AU',
  Austria: 'AT',
  Azerbaijan: 'AZ',
  Bahamas: 'BS',
  Bahrain: 'BH',
  Bangladesh: 'BD',
  Barbados: 'BB',
  Belarus: 'BY',
  Belgium: 'BE',
  Belize: 'BZ',
  Benin: 'BJ',
  Bermuda: 'BM',
  Bhutan: 'BT',
  Bolivia: 'BO',
  'Bosnia And Herzegovina': 'BA',
  Botswana: 'BW',
  'Bouvet Island': 'BV',
  Brazil: 'BR',
  'British Indian Ocean Territory': 'IO',
  'Brunei Darussalam': 'BN',
  Bulgaria: 'BG',
  'Burkina Faso': 'BF',
  Burundi: 'BI',
  Cambodia: 'KH',
  Cameroon: 'CM',
  Canada: 'CA',
  'Cape Verde': 'CV',
  'Cayman Islands': 'KY',
  'Central African Republic': 'CF',
  Chad: 'TD',
  Chile: 'CL',
  China: 'CN',
  'Christmas Island': 'CX',
  'Cocos (Keeling) Islands': 'CC',
  Colombia: 'CO',
  Comoros: 'KM',
  Congo: 'CG',
  'Congo, Democratic Republic': 'CD',
  'Cook Islands': 'CK',
  'Costa Rica': 'CR',
  "Cote D'Ivoire": 'CI',
  Croatia: 'HR',
  Cuba: 'CU',
  Cyprus: 'CY',
  'Czech Republic': 'CZ',
  Czech: 'CZ',
  Češka: 'CZ',
  Denmark: 'DK',
  Djibouti: 'DJ',
  Dominica: 'DM',
  'Dominican Republic': 'DO',
  Ecuador: 'EC',
  Egypt: 'EG',
  'El Salvador': 'SV',
  'Equatorial Guinea': 'GQ',
  Eritrea: 'ER',
  Estonia: 'EE',
  Ethiopia: 'ET',
  'Falkland Islands (Malvinas)': 'FK',
  'Faroe Islands': 'FO',
  Fiji: 'FJ',
  Finland: 'FI',
  France: 'FR',
  'French Guiana': 'GF',
  'French Polynesia': 'PF',
  'French Southern Territories': 'TF',
  Gabon: 'GA',
  Gambia: 'GM',
  Georgia: 'GE',
  Germany: 'DE',
  Ghana: 'GH',
  Gibraltar: 'GI',
  Greece: 'GR',
  Greenland: 'GL',
  Grenada: 'GD',
  Guadeloupe: 'GP',
  Guam: 'GU',
  Guatemala: 'GT',
  Guernsey: 'GG',
  Guinea: 'GN',
  'Guinea-Bissau': 'GW',
  Guyana: 'GY',
  Haiti: 'HT',
  'Heard Island & Mcdonald Islands': 'HM',
  'Holy See (Vatican City State)': 'VA',
  Honduras: 'HN',
  'Hong Kong': 'HK',
  Hungary: 'HU',
  Iceland: 'IS',
  India: 'IN',
  Indonesia: 'ID',
  'Iran, Islamic Republic Of': 'IR',
  Iraq: 'IQ',
  Ireland: 'IE',
  'Isle Of Man': 'IM',
  Israel: 'IL',
  Italy: 'IT',
  Jamaica: 'JM',
  Japan: 'JP',
  Jersey: 'JE',
  Jordan: 'JO',
  Kazakhstan: 'KZ',
  Kenya: 'KE',
  Kiribati: 'KI',
  Korea: 'KR',
  'South Korea': 'KR',
  Kuwait: 'KW',
  Kyrgyzstan: 'KG',
  "Lao People's Democratic Republic": 'LA',
  Latvia: 'LV',
  Lebanon: 'LB',
  Lesotho: 'LS',
  Liberia: 'LR',
  'Libyan Arab Jamahiriya': 'LY',
  Liechtenstein: 'LI',
  Lithuania: 'LT',
  Luxembourg: 'LU',
  Macao: 'MO',
  Macedonia: 'MK',
  Madagascar: 'MG',
  Malawi: 'MW',
  Malaysia: 'MY',
  Maldives: 'MV',
  Mali: 'ML',
  Malta: 'MT',
  'Marshall Islands': 'MH',
  Martinique: 'MQ',
  Mauritania: 'MR',
  Mauritius: 'MU',
  Mayotte: 'YT',
  Mexico: 'MX',
  'Micronesia, Federated States Of': 'FM',
  Moldova: 'MD',
  Monaco: 'MC',
  Mongolia: 'MN',
  Montenegro: 'ME',
  Montserrat: 'MS',
  Morocco: 'MA',
  Mozambique: 'MZ',
  Myanmar: 'MM',
  Namibia: 'NA',
  Nauru: 'NR',
  Nepal: 'NP',
  Netherlands: 'NL',
  'Netherlands Antilles': 'AN',
  'New Caledonia': 'NC',
  'New Zealand': 'NZ',
  'North Macedonia': 'MK',
  Nicaragua: 'NI',
  Niger: 'NE',
  Nigeria: 'NG',
  Niue: 'NU',
  'Norfolk Island': 'NF',
  'Northern Mariana Islands': 'MP',
  Norway: 'NO',
  Oman: 'OM',
  Pakistan: 'PK',
  Palau: 'PW',
  'Palestinian Territory, Occupied': 'PS',
  Panama: 'PA',
  'Papua New Guinea': 'PG',
  Paraguay: 'PY',
  Peru: 'PE',
  Philippines: 'PH',
  Pitcairn: 'PN',
  Poland: 'PL',
  Portugal: 'PT',
  'Puerto Rico': 'PR',
  Qatar: 'QA',
  Reunion: 'RE',
  Romania: 'RO',
  'Russian Federation': 'RU',
  Rwanda: 'RW',
  'Saint Barthelemy': 'BL',
  'Saint Helena': 'SH',
  'Saint Kitts And Nevis': 'KN',
  'Saint Lucia': 'LC',
  'Saint Martin': 'MF',
  'Saint Pierre And Miquelon': 'PM',
  'Saint Vincent And Grenadines': 'VC',
  Samoa: 'WS',
  'San Marino': 'SM',
  'Sao Tome And Principe': 'ST',
  'Saudi Arabia': 'SA',
  Senegal: 'SN',
  Serbia: 'RS',
  Seychelles: 'SC',
  'Sierra Leone': 'SL',
  Singapore: 'SG',
  Slovakia: 'SK',
  Slovenia: 'SI',
  'Solomon Islands': 'SB',
  Somalia: 'SO',
  'South Africa': 'ZA',
  'South Georgia And Sandwich Isl.': 'GS',
  Spain: 'ES',
  'Sri Lanka': 'LK',
  Sudan: 'SD',
  Suriname: 'SR',
  'Svalbard And Jan Mayen': 'SJ',
  Swaziland: 'SZ',
  Sweden: 'SE',
  Switzerland: 'CH',
  'Syrian Arab Republic': 'SY',
  Taiwan: 'TW',
  Tajikistan: 'TJ',
  Tanzania: 'TZ',
  Thailand: 'TH',
  'Timor-Leste': 'TL',
  Togo: 'TG',
  Tokelau: 'TK',
  Tonga: 'TO',
  'Trinidad And Tobago': 'TT',
  Tunisia: 'TN',
  Turkey: 'TR',
  Turkmenistan: 'TM',
  'Turks And Caicos Islands': 'TC',
  Tuvalu: 'TV',
  Uganda: 'UG',
  Ukraine: 'UA',
  'United Arab Emirates': 'AE',
  'United Kingdom': 'GB',
  'UK': 'GB',
  'United States': 'US',
  'USA': 'US',
  'Hawaii': 'US',
  'United States Outlying Islands': 'UM',
  Uruguay: 'UY',
  Uzbekistan: 'UZ',
  Vanuatu: 'VU',
  Venezuela: 'VE',
  'Viet Nam': 'VN',
  'Virgin Islands, British': 'VG',
  'Virgin Islands, U.S.': 'VI',
  'Wallis And Futuna': 'WF',
  'Western Sahara': 'EH',
  Yemen: 'YE',
  Zambia: 'ZM',
  Zimbabwe: 'ZW',

}

function drawFlagRender(data, type, row, meta) {
    
    if (type === 'display') {
        let country = '';
        
        if (countryList.hasOwnProperty(data)) { 
            country = countryList[data].toLowerCase();
        }

        return '<span class="flag ' + country + '"></span> ' + data;
    }

    return data;
}

function addLinkRender(data, type, row, meta) {
    //row has all the other column data of this row!
    
   if (type === 'display') {
       
        let link = row['link'];
        
        if(link) {
            return '<a target="_blank" href="' + link + '">' + data + '</a>';
        }

    }

    return data;
}

function addAddressLinkRender(data, type, row, meta) {
    //row has all the other column data of this row!
    
   if (type === 'display') {
       
        let link = row['addressLink'];
        
        if(link) {
            return '<a target="_blank" href="' + link + '">' + data + '</a>';
        }

    }

    return data;
}

function dateRender(data, type, row, meta) {
    //row has all the other column data of this row!

    if (type === 'display') {
       
        if (data) {
            const date = luxon.DateTime.fromFormat(data, "y-MM-dd");
            

            
            return date.toFormat('d MMM');
        }
    }

    return data;
}

function dateRenderDeadline(data, type, row, meta) {
    //row has all the other column data of this row!

    if (type === 'display') {
       
        if (data) {
            const date = luxon.DateTime.fromFormat(data, "y-MM-dd");
            
            return date.toFormat('d MMM y');
        }
    }

    return data;
}

function colorRow(row, data, displayNum, displayIndex, dataIndex) {
    
    let now = new Date();

    if (data["start"]) {
        
        let start = new Date(data["start"]);
        
        if (start < now) {
            //$('td', row).css('background-color', '#f5c6cb') //low red
            $('td', row).addClass('table-danger') //low red
            
        } else if (start.setMonth(start.getMonth() - 1) < now) {
            //$('td', row).css('background-color', '#feeeba') //low yellow
            $('td', row).addClass('table-warning') //low yellow
        }
    }
    
    if (data["deadline"]) { 
        
        let deadline = new Date(data["deadline"]);
        
        if (deadline < now) {
            //$('tr', row).css('background-color', '#aaaaa') //low red
            $(row).find('td:eq(5)').css('color', 'red');
            //$(row).find('td:eq(5)').css('background-color', 'red');

            
        } else if (deadline.setMonth(deadline.getMonth() - 1) < now) {
            $(row).find('td:eq(5)').css('color', 'orange');
        }

    }
    
//     if (data['note']) {
//         let cell= $(row).find('td:eq(0)');
//         
//         cell.addClass("dt-control");
//         cell.css('padding-left', '4px');
//     }
}


function costRender(data, type, row, meta) {
    //row has all the other column data of this row!
    
   if (type === 'display') {
       
        let costNote = row['costNote'];
        
        if (costNote) {
            return '<a tabindex="0" role="button" data-toggle="popover" data-trigger="focus" data-content="' + costNote + '">' + data + ' *</a>'

        }

    }

    return data;
}

function addButtonNoteListener(table, type, year) {
    
    $('#' + type + year + ' tbody').on('click', 'td.dt-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row(tr);

        if (row.child.isShown()) {
            //This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        } else {
            //Open this row
            row.child("<p>" + row.data().note + "</p>").show();
            tr.addClass('shown');
        }
    });
}


function addTableListeners(table) {
    
    // Add event listener for opening and closing details
    // Not used anymore since now is handled by responsive plugin
    //addButtonNoteListener(table, type, year);
    
    table.on( 'responsive-resize', function ( e, datatable, columns ) {
        table.rows('.parent').nodes().to$().find('td:first-child').trigger('click');
    } );
    
    table.on('click', 'td.dtr-control', function () {
        if ($(this).parent().next().hasClass("child")) {
            $(this).parent().next().find('[data-toggle="popover"]').popover();
        }
    });
}



function responsiveRenderer( api, rowIdx, columns ) {
    
    var data = $.map( columns, function ( col, i ) {
        if (col.hidden && (col.data != '') ) {
            console.log(col);
            console.log(rowIdx);
            return `
                <li style="padding:0" data-dtr-index="`+col.columnIndex+`" data-dt-row="`+col.rowIndex+`" data-dt-column="`+col.columnIndex+`">
                    <span class="dtr-title">`+col.title+`</span> 
                    <span class="dtr-data">`+col.data+`</span>
                </li> 
            `;
        } else {
            return '';
        }
    } ).join('');
    
    if (data) {
        return $('<ul data-dtr-index="'+rowIdx+'" class="dtr-details" />').append( data )
    } else {
        return false;
    }
}
