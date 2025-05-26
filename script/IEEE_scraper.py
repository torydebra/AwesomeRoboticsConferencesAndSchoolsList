import requests
from datetime import datetime, timezone
from bs4 import BeautifulSoup
import json
import glob

class Conference:
    def __init__(self, shortName, name, start, end, deadline, city, country, link, type, addressLink, note, year):

        self.shortName = shortName
        self.name = name
        self.start = start
        self.end = end
        self.deadline = deadline
        self.city = city
        self.country = country
        self.link = link
        self.type = type
        self.addressLink = addressLink
        self.note = note
        self.year = year

    def as_dict(self):
        return {'shortName': self.shortName, 'name': self.name, 'start': self.start, 'end': self.end, 'deadline': self.deadline, 'city': self.city, 'country': self.country, 'link': self.link, 'type': self.type, 'addressLink': self.addressLink, 'note': self.note}


def create_conference(row):
    conf_title = row.find(attrs={'class':'conf-title'})
    conf_title_text = ""

    link = ""

    link_element=conf_title.find('a')
    if (link_element) :
        link = link_element['href']
        conf_title_text = link_element.text
    else :
        conf_title_text = ''.join(conf_title.find_all(string=True, recursive=False)).strip()

    #print(conf_title_text)

    words = conf_title_text.split()
    year = words[0]
    shortName = words[-1]
    name = ' '.join(words[1:-1])

    conf_place = row.find(attrs={'class':'conf-place'}).text
    conf_place_split = conf_place.split(',')
    #print(words)
    city = conf_place_split[0].strip()
    if (len(conf_place_split) > 1):
        country = conf_place_split[1].strip()
    else:
        country = ""

    conf_date = row.find(attrs={'class':'conf-date'}).span['title']
    conf_date_split = conf_date[1:].split('-')
    start = datetime.fromtimestamp(int(conf_date_split[0]), timezone.utc).strftime('%Y-%m-%d')
    end = datetime.fromtimestamp(int(conf_date_split[1]), timezone.utc).strftime('%Y-%m-%d')

    #deadline
    deadline = ""
    abstract_date_element = row.find('div', class_='conf-sub-date')
    if abstract_date_element:
      title_attribute = abstract_date_element.find('span', {'title': True})
      timestamp = title_attribute['title'].replace('abs', '')
      deadline = datetime.fromtimestamp(int(timestamp), timezone.utc).strftime('%Y-%m-%d')

    #print(name)
    # print(year)
    # print(shortName[1:-1])
    # print(city)
    # print(country)
    # print(start)
    # print(end)
    # print(" ")

    return Conference(shortName[1:-1], name, start, end, deadline, city, country, link, "Conference", "", "", year)


def main():
    # Send a GET request to the webpage
    url = "https://www.ieee-ras.org/conferences-workshops/upcoming-conferences"
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.76 Safari/537.36', "Upgrade-Insecure-Requests": "1","DNT": "1","Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Accept-Language": "en-US,en;q=0.5","Accept-Encoding": "gzip, deflate"}
    response = requests.get(url, headers=headers)
    #print(response.text)

    # Parse the HTML content using BeautifulSoup
    soup = BeautifulSoup(response.text, 'html.parser')
    #print(soup)
    confs = soup.find_all(attrs={'class':'conf-full-item'})
    #print(confs)


    json_confs_dict = {}
    json_file_to_update = {}

    # Parse all www/data/conf***.json files
    json_files = glob.glob("../www/data/conf*.json")
    #print(json_files)
    existent_confs_dict = {}
    for file in json_files:
        with open(file, 'r') as f:
            
            year = file.split("conf")[1].split(".json")[0]

            json_confs = json.load(f)
            json_confs_dict[year] = json_confs
            json_file_to_update[year] =  False

            #print(json_confs)
            for json_conf in json_confs:
                #print(json_conf)
                #print(json_conf['shortName'])
                if year in existent_confs_dict:
                    existent_confs_dict[year][json_conf['shortName'].upper()] = json_conf
                else:
                    existent_confs_dict[year] = {json_conf['shortName'].upper(): json_conf}

    offset_insertion = 0 
    for row in confs:
        scraped_conf = create_conference(row)

        if not (scraped_conf.shortName.upper() in existent_confs_dict[scraped_conf.year]):
            #ignore roman already present because of bad format
            # if (scraped_conf.name == "34th IEEE International Conference on Robot and Human Interactive Communication (RO-MAN)"):
            #     continue
            print("Adding ", scraped_conf.shortName, scraped_conf.year)
            json_file_to_update[scraped_conf.year] = True

            index_to_insert = 0
            #to keep track of the inserted one, since we can not updated existent_confs_dict inserting in "the middle"
            #so this is the offset to add to the index_to_insert
            for shortName, conf in existent_confs_dict[scraped_conf.year].items():
                conf_date_start = datetime.strptime(conf['start'], '%Y-%m-%d')
                scraped_conf_date_start = datetime.strptime(scraped_conf.start, '%Y-%m-%d')
                #print(conf_date_start)
                #print(scraped_conf_date_start)

                if (conf_date_start < scraped_conf_date_start):
                    index_to_insert += 1

                elif (conf_date_start == scraped_conf_date_start):
                    conf_date_end = datetime.strptime(conf['end'], '%Y-%m-%d')
                    scraped_conf_date_end = datetime.strptime(scraped_conf.end, '%Y-%m-%d')

                    if (conf_date_end < scraped_conf_date_end):
                        #must be put after, otherwise it will be put before
                        index_to_insert += 1
                
                    # do not consider the case when two conf has the same init date, and different end date... not so important having so detailed order
                    break

                else:   
                    break

            json_confs_dict[scraped_conf.year].insert(index_to_insert+offset_insertion, scraped_conf.as_dict())
            offset_insertion += 1

    updated = False
    #dump on file
    for year, json_confs in json_confs_dict.items():
        json_file_path = "../www/data/conf" + year + ".json"

        if json_file_to_update[year]:
            with open(json_file_path, 'w') as file:
                json.dump(json_confs, file, indent=2)  
                file.close()
                print("Updated file: ", json_file_path)
                updated = True
        else:
            print("No update for file: ", json_file_path)
    
    return updated

if __name__ == "__main__":
    import sys
    result = main()
    sys.exit(0 if result else 1)




