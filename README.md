<a name="readme-top"></a>
# AwesomeRoboticsConferencesAndSchoolsList

The list is live at https://torydebra.github.io/AwesomeRoboticsConferencesAndSchoolsList

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about">About</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## About
I created this half for fun and half for learning something new. Double check on official conferences/school website for the correct/updated information (and if you find some wrong info here, please open a PR/issue :D)  

<a name="readme-top"></a>

## Contributing
### Add/Update Conference or School
The `javascript` magic parses `json` files from the [www/data](www/data) folder that are manually updated. Files are divided per year and per type (e.g. `conf2022` or `school2024`)  
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

You can open PR directly with the addition/update. A github action is set to validate the updates against the schema at [www/data/schema.json](www/data/schema.json).

### Other Contributions
HTML, JS, Github-Actions and anything else about fixes and improvements are welcomed!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License

Distributed under the GLP-3.0 License. See `LICENSE.md` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Acknowledgments

* [JQuery](https://jquery.com/) Obviously
* [DataTables.js](https://datatables.net/) The core which provide the table layout
* [Luxon](https://moment.github.io/luxon/) Handling dates
* [world-flag-sprites](https://github.com/lafeber/world-flags-sprite) Flags! Who do not like flags?
* [best-README-Template](https://github.com/othneildrew/Best-README-Template) For the readme itself

### Github Actions
* [validate-json-action](https://github.com/OrRosenblatt/validate-json-action) Validate json against a schema
* [checkout-files](https://github.com/Bhacaz/checkout-files) Checkout only certain files
* [html-preview-action](https://github.com/pavi2410/html-preview-action) 
* [comment-pull-request](https://github.com/thollander/actions-comment-pull-request) Commenting PR and putting rocket reaction :rocket:

<p align="right">(<a href="#readme-top">back to top</a>)</p>
