# Contributing
## Add/Update Conference or School
The `javascript` magic parses `json` files from the [www/data](www/data) folder that are manually updated. Files are divided per year and per type (e.g. `conf2022` or `school2024`).  
You can open PR directly with the addition/update you want to add. A github action is set to validate the updates against the schema at [www/data/schema.json](www/data/schema.json).  
After locating the right file, this is the json schema for an entry:
```json
{
    "shortName": "ABC",
    "name": "Aaaaa Bbbbbb Ccccc",
    "start": "yyyy-mm-dd",
    "end": "yyyy-mm-dd",
    "deadline": "yyyy-mm-dd",
    "city": "A tiny city",
    "country": "World",
    "link": "https://web-page",
    "addressLink": "https://location-web-page",
    "type": "Conference",
    "note": "Some additional info"
},
```

- `deadline`, `link`, `addressLink`, `note` can be empty, but why not adding this info if available?
- Keep `shortName` short (acronym usually)
- `yyyy-mm-dd` format is strict: 4 numbers for year, 2 for month (zero padded if necessary), 2 for days (zero padded if necessary), e.g. `2000-01-01`
- `deadline` can be paper submission deadline (for conferences) or subscription deadline for schools
- `country`: please write the country `Capitalized` and in English so that the flag sprite is found correctly.
- `link` should link to the conference/school web page. Prepend `https://` or validator may not recognized it as URI. The link will be anchored to the __Short Name__ entry
- `addressLink` should link to the conference/school location, e.g. city on the map. The link  will be anchored to the __City__ entry
- `type` can only be "Conference", "Workshop", or "School". I may use this info in future to handle better the files
- `note` Additional info that will be displayed soon in the table
- Not very important, but it may be nice to put the entry ordered by start date, since everything is already like this

### School Data Addendum
For schools additional entry may be put:
```json
{
    ...
    "cost": ""
    "costNote": ""
},
```

- `cost`, the price, as a string (max lenght 20). Since prices vary a lot depending on lot of factors, put here the min/max (do not forget to put the currency with the proper symbol)
- `costNote`, here additional info about the price can be added. Can be any string (max lenght 100), e.g. I found this format the shortest but still including all usual info: _students/academics/other early(late) : €350(400)/400(500)/600(700)_. Do no put here things like meals/travel included to not overflow the popover. These additional info can be added in the `note` entry.


## Other Contributions
HTML, JS, Github-Actions and anything else about fixes and improvements are welcomed!  

If you want to visualize the page locally, you can not simply open the index.html with the browser, since for CORS something stuff json file won't load. You should set up a local server and go to localhost through the browser, the simplest way I found is to run `python3 -m http.server` inside the `www` folder and visit `http://localhost:8000/` 
