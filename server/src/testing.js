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

const countries = [
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
  {
    name: {
      common: "San Marino",
      official: "Republic of San Marino",
      nativeName: {
        ita: {
          official: "Repubblica di San Marino",
          common: "San Marino",
        },
      },
    },
    tld: [".sm"],
    cca2: "SM",
    ccn3: "674",
    cca3: "SMR",
    cioc: "SMR",
    independent: true,
    status: "officially-assigned",
    unMember: true,
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    idd: {
      root: "+3",
      suffixes: ["78"],
    },
    capital: ["City of San Marino"],
    altSpellings: ["SM", "Republic of San Marino", "Repubblica di San Marino"],
    region: "Europe",
    subregion: "Southern Europe",
    languages: {
      ita: "Italian",
    },
    translations: {
      ara: {
        official: "جمهورية سان مارينو",
        common: "سان مارينو",
      },
      ces: {
        official: "Republika San Marino",
        common: "San Marino",
      },
      cym: {
        official: "Republic of San Marino",
        common: "San Marino",
      },
      deu: {
        official: "Republik San Marino",
        common: "San Marino",
      },
      est: {
        official: "San Marino Vabariik",
        common: "San Marino",
      },
      fin: {
        official: "San Marinon seesteinen tasavalta",
        common: "San Marino",
      },
      fra: {
        official: "République de Saint-Marin",
        common: "Saint-Marin",
      },
      hrv: {
        official: "Većina Serene Republika San Marino",
        common: "San Marino",
      },
      hun: {
        official: "San Marino Köztársaság",
        common: "San Marino",
      },
      ita: {
        official: "Serenissima Repubblica di San Marino",
        common: "San Marino",
      },
      jpn: {
        official: "サンマリノのほとんどセリーヌ共和国",
        common: "サンマリノ",
      },
      kor: {
        official: "산마리노 공화국",
        common: "산마리노",
      },
      nld: {
        official: "Meest Serene Republiek San Marino",
        common: "San Marino",
      },
      per: {
        official: "جمهوری سان مارینو",
        common: "سان مارینو",
      },
      pol: {
        official: "Republika San Marino",
        common: "San Marino",
      },
      por: {
        official: "Sereníssima República de San Marino",
        common: "San Marino",
      },
      rus: {
        official: "Большинство Serene Республика Сан-Марино",
        common: "Сан-Марино",
      },
      slk: {
        official: "Sanmarínska republika",
        common: "San Maríno",
      },
      spa: {
        official: "Serenísima República de San Marino",
        common: "San Marino",
      },
      swe: {
        official: "Republiken San Marino",
        common: "San Marino",
      },
      urd: {
        official: "جمہوریہ سان مارینو",
        common: "سان مارینو",
      },
      zho: {
        official: "圣马力诺共和国",
        common: "圣马力诺",
      },
    },
    latlng: [43.76666666, 12.41666666],
    landlocked: true,
    borders: ["ITA"],
    area: 61.0,
    demonyms: {
      eng: {
        f: "Sammarinese",
        m: "Sammarinese",
      },
      fra: {
        f: "Saint-Marinaise",
        m: "Saint-Marinais",
      },
    },
    flag: "\uD83C\uDDF8\uD83C\uDDF2",
    maps: {
      googleMaps: "https://goo.gl/maps/rxCVJjm8dVY93RPY8",
      openStreetMaps: "https://www.openstreetmap.org/relation/54624",
    },
    population: 33938,
    fifa: "SMR",
    car: {
      signs: ["RSM"],
      side: "right",
    },
    timezones: ["UTC+01:00"],
    continents: ["Europe"],
    flags: {
      png: "https://flagcdn.com/w320/sm.png",
      svg: "https://flagcdn.com/sm.svg",
    },
    coatOfArms: {
      png: "https://mainfacts.com/media/images/coats_of_arms/sm.png",
      svg: "https://mainfacts.com/media/images/coats_of_arms/sm.svg",
    },
    startOfWeek: "monday",
    capitalInfo: {
      latlng: [43.94, 12.45],
    },
    postalCode: {
      format: "4789#",
      regex: "^(4789\\d)$",
    },
  },
  {
    name: {
      common: "French Polynesia",
      official: "French Polynesia",
      nativeName: {
        fra: {
          official: "Polynésie française",
          common: "Polynésie française",
        },
      },
    },
    tld: [".pf"],
    cca2: "PF",
    ccn3: "258",
    cca3: "PYF",
    independent: false,
    status: "officially-assigned",
    unMember: false,
    currencies: {
      XPF: {
        name: "CFP franc",
        symbol: "₣",
      },
    },
    idd: {
      root: "+6",
      suffixes: ["89"],
    },
    capital: ["Papeetē"],
    altSpellings: [
      "PF",
      "Polynésie française",
      "French Polynesia",
      "Pōrīnetia Farāni",
    ],
    region: "Oceania",
    subregion: "Polynesia",
    languages: {
      fra: "French",
    },
    translations: {
      ara: {
        official: "بولينزيا الفرنسية",
        common: "بولينزيا الفرنسية",
      },
      ces: {
        official: "Francouzská Polynésie",
        common: "Francouzská Polynésie",
      },
      cym: {
        official: "French Polynesia",
        common: "French Polynesia",
      },
      deu: {
        official: "Französisch-Polynesien",
        common: "Französisch-Polynesien",
      },
      est: {
        official: "Prantsuse Polüneesia",
        common: "Prantsuse Polüneesia",
      },
      fin: {
        official: "Ranskan Polynesia",
        common: "Ranskan Polynesia",
      },
      fra: {
        official: "Polynésie française",
        common: "Polynésie française",
      },
      hrv: {
        official: "Francuska Polinezija",
        common: "Francuska Polinezija",
      },
      hun: {
        official: "Francia Polinézia",
        common: "Francia Polinézia",
      },
      ita: {
        official: "Polinesia Francese",
        common: "Polinesia Francese",
      },
      jpn: {
        official: "フランス領ポリネシア",
        common: "フランス領ポリネシア",
      },
      kor: {
        official: "프랑스령 폴리네시아",
        common: "프랑스령 폴리네시아",
      },
      nld: {
        official: "Frans-Polynesië",
        common: "Frans-Polynesië",
      },
      per: {
        official: "پُلی‌نِزی فرانسه",
        common: "پُلی‌نِزی فرانسه",
      },
      pol: {
        official: "Polinezja Francuska",
        common: "Polinezja Francuska",
      },
      por: {
        official: "Polinésia Francesa",
        common: "Polinésia Francesa",
      },
      rus: {
        official: "Французская Полинезия",
        common: "Французская Полинезия",
      },
      slk: {
        official: "Francúzska Polynézia",
        common: "Francúzska Polynézia",
      },
      spa: {
        official: "Polinesia francés",
        common: "Polinesia Francesa",
      },
      swe: {
        official: "Franska Polynesien",
        common: "Franska Polynesien",
      },
      urd: {
        official: "فرانسیسی پولینیشیا",
        common: "فرانسیسی پولینیشیا",
      },
      zho: {
        official: "法属波利尼西亚",
        common: "法属波利尼西亚",
      },
    },
    latlng: [-15.0, -140.0],
    landlocked: false,
    area: 4167.0,
    demonyms: {
      eng: {
        f: "French Polynesian",
        m: "French Polynesian",
      },
      fra: {
        f: "Polynésienne",
        m: "Polynésien",
      },
    },
    flag: "\uD83C\uDDF5\uD83C\uDDEB",
    maps: {
      googleMaps: "https://goo.gl/maps/xgg6BQTRyeQg4e1m6",
      openStreetMaps: "https://www.openstreetmap.org/relation/3412620",
    },
    population: 280904,
    car: {
      signs: ["F"],
      side: "right",
    },
    timezones: ["UTC-10:00", "UTC-09:30", "UTC-09:00"],
    continents: ["Oceania"],
    flags: {
      png: "https://flagcdn.com/w320/pf.png",
      svg: "https://flagcdn.com/pf.svg",
    },
    coatOfArms: {
      png: "https://mainfacts.com/media/images/coats_of_arms/pf.png",
      svg: "https://mainfacts.com/media/images/coats_of_arms/pf.svg",
    },
    startOfWeek: "monday",
    capitalInfo: {
      latlng: [-17.53, -149.56],
    },
    postalCode: {
      format: "#####",
      regex: "^((97|98)7\\d{2})$",
    },
  },
  {
    name: {
      common: "Sierra Leone",
      official: "Republic of Sierra Leone",
      nativeName: {
        eng: {
          official: "Republic of Sierra Leone",
          common: "Sierra Leone",
        },
      },
    },
    tld: [".sl"],
    cca2: "SL",
    ccn3: "694",
    cca3: "SLE",
    cioc: "SLE",
    independent: true,
    status: "officially-assigned",
    unMember: true,
    currencies: {
      SLL: {
        name: "Sierra Leonean leone",
        symbol: "Le",
      },
    },
    idd: {
      root: "+2",
      suffixes: ["32"],
    },
    capital: ["Freetown"],
    altSpellings: ["SL", "Republic of Sierra Leone"],
    region: "Africa",
    subregion: "Western Africa",
    languages: {
      eng: "English",
    },
    translations: {
      ara: {
        official: "جمهورية سيراليون",
        common: "سيراليون",
      },
      ces: {
        official: "Republika Sierra Leone",
        common: "Sierra Leone",
      },
      cym: {
        official: "Republic of Sierra Leone",
        common: "Sierra Leone",
      },
      deu: {
        official: "Republik Sierra Leone",
        common: "Sierra Leone",
      },
      est: {
        official: "Sierra Leone Vabariik",
        common: "Sierra Leone",
      },
      fin: {
        official: "Sierra Leonen tasavalta",
        common: "Sierra Leone",
      },
      fra: {
        official: "République de Sierra Leone",
        common: "Sierra Leone",
      },
      hrv: {
        official: "Republika Sijera Leone",
        common: "Sijera Leone",
      },
      hun: {
        official: "Sierra Leone Köztársaság",
        common: "Sierra Leone",
      },
      ita: {
        official: "Repubblica della Sierra Leone",
        common: "Sierra Leone",
      },
      jpn: {
        official: "シエラレオネ共和国",
        common: "シエラレオネ",
      },
      kor: {
        official: "시에라리온 공화국",
        common: "시에라리온",
      },
      nld: {
        official: "Republiek Sierra Leone",
        common: "Sierra Leone",
      },
      per: {
        official: "جمهوری سیرالئون",
        common: "سیرالئون",
      },
      pol: {
        official: "Sierra Leone",
        common: "Sierra Leone",
      },
      por: {
        official: "República da Serra Leoa",
        common: "Serra Leoa",
      },
      rus: {
        official: "Республика Сьерра-Леоне",
        common: "Сьерра-Леоне",
      },
      slk: {
        official: "Sierraleonská republika",
        common: "Sierra Leone",
      },
      spa: {
        official: "República de Sierra Leona",
        common: "Sierra Leone",
      },
      swe: {
        official: "Republiken Sierra Leone",
        common: "Sierra Leone",
      },
      urd: {
        official: "جمہوریہ سیرالیون",
        common: "سیرالیون",
      },
      zho: {
        official: "塞拉利昂共和国",
        common: "塞拉利昂",
      },
    },
    latlng: [8.5, -11.5],
    landlocked: false,
    borders: ["GIN", "LBR"],
    area: 71740.0,
    demonyms: {
      eng: {
        f: "Sierra Leonean",
        m: "Sierra Leonean",
      },
      fra: {
        f: "Sierra-leonaise",
        m: "Sierra-leonais",
      },
    },
    flag: "\uD83C\uDDF8\uD83C\uDDF1",
    maps: {
      googleMaps: "https://goo.gl/maps/jhacar85oq9QaeKB7",
      openStreetMaps: "https://www.openstreetmap.org/relation/192777",
    },
    population: 7976985,
    gini: {
      2018: 35.7,
    },
    fifa: "SLE",
    car: {
      signs: ["WAL"],
      side: "right",
    },
    timezones: ["UTC"],
    continents: ["Africa"],
    flags: {
      png: "https://flagcdn.com/w320/sl.png",
      svg: "https://flagcdn.com/sl.svg",
    },
    coatOfArms: {
      png: "https://mainfacts.com/media/images/coats_of_arms/sl.png",
      svg: "https://mainfacts.com/media/images/coats_of_arms/sl.svg",
    },
    startOfWeek: "monday",
    capitalInfo: {
      latlng: [8.48, -13.23],
    },
  },
  {
    name: {
      common: "Madagascar",
      official: "Republic of Madagascar",
      nativeName: {
        fra: {
          official: "République de Madagascar",
          common: "Madagascar",
        },
        mlg: {
          official: "Repoblikan'i Madagasikara",
          common: "Madagasikara",
        },
      },
    },
    tld: [".mg"],
    cca2: "MG",
    ccn3: "450",
    cca3: "MDG",
    cioc: "MAD",
    independent: true,
    status: "officially-assigned",
    unMember: true,
    currencies: {
      MGA: {
        name: "Malagasy ariary",
        symbol: "Ar",
      },
    },
    idd: {
      root: "+2",
      suffixes: ["61"],
    },
    capital: ["Antananarivo"],
    altSpellings: [
      "MG",
      "Republic of Madagascar",
      "Repoblikan'i Madagasikara",
      "République de Madagascar",
    ],
    region: "Africa",
    subregion: "Eastern Africa",
    languages: {
      fra: "French",
      mlg: "Malagasy",
    },
    translations: {
      ara: {
        official: "جمهورية مدغشقر",
        common: "مدغشقر",
      },
      ces: {
        official: "Madagaskarská republika",
        common: "Madagaskar",
      },
      cym: {
        official: "Republic of Madagascar",
        common: "Madagascar",
      },
      deu: {
        official: "Republik Madagaskar",
        common: "Madagaskar",
      },
      est: {
        official: "Madagaskari Vabariik",
        common: "Madagaskar",
      },
      fin: {
        official: "Madagaskarin tasavalta",
        common: "Madagaskar",
      },
      fra: {
        official: "République de Madagascar",
        common: "Madagascar",
      },
      hrv: {
        official: "Republika Madagaskar",
        common: "Madagaskar",
      },
      hun: {
        official: "Madagaszkári Köztársaság",
        common: "Madagaszkár",
      },
      ita: {
        official: "Repubblica del Madagascar",
        common: "Madagascar",
      },
      jpn: {
        official: "マダガスカル共和国",
        common: "マダガスカル",
      },
      kor: {
        official: "마다가스카르 공화국",
        common: "마다가스카르",
      },
      nld: {
        official: "Republiek Madagaskar",
        common: "Madagaskar",
      },
      per: {
        official: "جمهوری ماداگاسکار",
        common: "ماداگاسکار",
      },
      pol: {
        official: "Republika Madagaskaru",
        common: "Madagaskar",
      },
      por: {
        official: "República de Madagáscar",
        common: "Madagáscar",
      },
      rus: {
        official: "Республика Мадагаскар",
        common: "Мадагаскар",
      },
      slk: {
        official: "Madagaskarská republika",
        common: "Madagaskar",
      },
      spa: {
        official: "República de Madagascar",
        common: "Madagascar",
      },
      swe: {
        official: "Republiken Madagaskar",
        common: "Madagaskar",
      },
      urd: {
        official: "جمہوریہ مڈغاسکر",
        common: "مڈغاسکر",
      },
      zho: {
        official: "马达加斯加共和国",
        common: "马达加斯加",
      },
    },
    latlng: [-20.0, 47.0],
    landlocked: false,
    area: 587041.0,
    demonyms: {
      eng: {
        f: "Malagasy",
        m: "Malagasy",
      },
      fra: {
        f: "Malgache",
        m: "Malgache",
      },
    },
    flag: "\uD83C\uDDF2\uD83C\uDDEC",
    maps: {
      googleMaps: "https://goo.gl/maps/AHQh2ABBaFW6Ngj26",
      openStreetMaps: "https://www.openstreetmap.org/relation/447325",
    },
    population: 27691019,
    gini: {
      2012: 42.6,
    },
    fifa: "MAD",
    car: {
      signs: ["RM"],
      side: "right",
    },
    timezones: ["UTC+03:00"],
    continents: ["Africa"],
    flags: {
      png: "https://flagcdn.com/w320/mg.png",
      svg: "https://flagcdn.com/mg.svg",
    },
    coatOfArms: {
      png: "https://mainfacts.com/media/images/coats_of_arms/mg.png",
      svg: "https://mainfacts.com/media/images/coats_of_arms/mg.svg",
    },
    startOfWeek: "monday",
    capitalInfo: {
      latlng: [-18.92, 47.52],
    },
    postalCode: {
      format: "###",
      regex: "^(\\d{3})$",
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

//console.log(cleanUsers(countries));

//console.log(countries[0].name.common);

const getIds = (apiCountries, searchedCountries) => {
  const cleanedCountries = cleanUsers(apiCountries);
  const ids = [];
  for (const countryName of searchedCountries) {
    for (const country of cleanedCountries) {
      if (country.name === countryName) {
        ids.push(country.id);
      }
    }
  }
  // for (var i = 0; i < searchedCountries.length; i++) {
  //   for (var j = 0; j < cleanedCountries.length; i++) {
  //     if (cleanedCountries[j].name === searchedCountries[i]) {
  //       console.log("Found");
  //       Ids.push(apiCountries[i].cca3);
  //     }
  //   }
  // }
  return ids;
};

const search = ["Kenya", "Sierra Leone"];
console.log(getIds(countries, search));

// const continents = [];
// countries.forEach((country) => {
//   if (!continents.includes(country.continents[0])) {
//     continents.push(country.continents[0]);
//   }
// });

// console.log(continents);

// if (
//   form.season !== "Primavera" ||
//   form.season !== "Verano" ||
//   form.season !== "Otoño" ||
//   form.season !== "Invierno"
// ) {
//   setErrors({
//     ...errors,
//     season: "Ingresar: Primavera, Verano, Otoño o Invierno",
//   });
// } else if (form.season === "") {
//   setErrors({ ...errors, season: "Ingresar estacion" });
// } else {
//   setErrors({ ...errors, season: "" });
// }
