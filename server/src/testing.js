const { Sequelize } = require("sequelize");
require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/countries`,
  {
    logging: false,
    native: false,
  }
);

// console.log(Sequelize);

let kenya = [
  {
    name: {
      common: "Kenya",
      official: "Republic of Kenya",
      nativeName: {
        eng: {
          official: "Republic of Kenya",
          common: "Kenya",
        },
        swa: {
          official: "Republic of Kenya",
          common: "Kenya",
        },
      },
    },
    tld: [".ke"],
    cca2: "KE",
    ccn3: "404",
    cca3: "KEN",
    cioc: "KEN",
    independent: true,
    status: "officially-assigned",
    unMember: true,
    currencies: {
      KES: {
        name: "Kenyan shilling",
        symbol: "Sh",
      },
    },
    idd: {
      root: "+2",
      suffixes: ["54"],
    },
    capital: ["Nairobi"],
    altSpellings: ["KE", "Republic of Kenya", "Jamhuri ya Kenya"],
    region: "Africa",
    subregion: "Eastern Africa",
    languages: {
      eng: "English",
      swa: "Swahili",
    },
    translations: {
      ara: {
        official: "جمهورية كينيا",
        common: "كينيا",
      },
      ces: {
        official: "Keňská republika",
        common: "Keňa",
      },
      cym: {
        official: "Republic of Kenya",
        common: "Kenya",
      },
      deu: {
        official: "Republik Kenia",
        common: "Kenia",
      },
      est: {
        official: "Keenia Vabariik",
        common: "Keenia",
      },
      fin: {
        official: "Kenian tasavalta",
        common: "Kenia",
      },
      fra: {
        official: "République du Kenya",
        common: "Kenya",
      },
      hrv: {
        official: "Republika Kenija",
        common: "Kenija",
      },
      hun: {
        official: "Kenyai Köztársaság",
        common: "Kenya",
      },
      ita: {
        official: "Repubblica del Kenya",
        common: "Kenya",
      },
      jpn: {
        official: "ケニア共和国",
        common: "ケニア",
      },
      kor: {
        official: "케냐 공화국",
        common: "케냐",
      },
      nld: {
        official: "Republiek Kenia",
        common: "Kenia",
      },
      per: {
        official: "جمهوری کنیا",
        common: "کنیا",
      },
      pol: {
        official: "Republika Kenii",
        common: "Kenia",
      },
      por: {
        official: "República do Quénia",
        common: "Quénia",
      },
      rus: {
        official: "Республика Кения",
        common: "Кения",
      },
      slk: {
        official: "Kenská republika",
        common: "Keňa",
      },
      spa: {
        official: "República de Kenya",
        common: "Kenia",
      },
      swe: {
        official: "Republiken Kenya",
        common: "Kenya",
      },
      urd: {
        official: "جمہوریہ کینیا",
        common: "کینیا",
      },
      zho: {
        official: "肯尼亚共和国",
        common: "肯尼亚",
      },
    },
    latlng: [1, 38],
    landlocked: false,
    borders: ["ETH", "SOM", "SSD", "TZA", "UGA"],
    area: 580367,
    demonyms: {
      eng: {
        f: "Kenyan",
        m: "Kenyan",
      },
      fra: {
        f: "Kényane",
        m: "Kényan",
      },
    },
    flag: "🇰🇪",
    maps: {
      googleMaps: "https://goo.gl/maps/Ni9M7wcCxf8bJHLX8",
      openStreetMaps: "https://www.openstreetmap.org/relation/192798",
    },
    population: 53771300,
    gini: {
      2015: 40.8,
    },
    fifa: "KEN",
    car: {
      signs: ["EAK"],
      side: "left",
    },
    timezones: ["UTC+03:00"],
    continents: ["Africa"],
    flags: {
      png: "https://flagcdn.com/w320/ke.png",
      svg: "https://flagcdn.com/ke.svg",
    },
    coatOfArms: {
      png: "https://mainfacts.com/media/images/coats_of_arms/ke.png",
      svg: "https://mainfacts.com/media/images/coats_of_arms/ke.svg",
    },
    startOfWeek: "monday",
    capitalInfo: {
      latlng: [-1.28, 36.82],
    },
    postalCode: {
      format: "#####",
      regex: "^(\\d{5})$",
    },
  },
];

const cleanUsers = (arr) =>
  arr.map((country) => {
    return {
      id: country.cca3,
      name: country.name.common,
      flag_image: country.flags.png,
      continent: country.continents,
      capital: country.capital,
      subregion: country.subregion,
      area: country.area,
      population: country.population,
      created: false,
    };
  });

console.log(cleanUsers(kenya));
