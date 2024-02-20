export interface Country {
    name: {
      common: string;
      official: string;
      nativeName: {
        est: {
          official: string;
          common: string;
        };
      };
    };
    tld: string[];
    alpha2Code: string;
    cca2: string;
    ccn3: string;
    cca3: string;
    cioc: string;
    numericCode: string;
    independent: boolean;
    status: string;
    unMember: boolean;
    currencies: {
      EUR: {
        name: string;
        symbol: string;
      };
    };
    idd: {
      root: string;
      suffixes: string[];
    };
    capital: string[];
    altSpellings: string[];
    region: string;
    subregion: string;
    languages: {
      est: string;
    };
    translations: {
      ara: {
        official: string;
        common: string;
      };
      bre: {
        official: string;
        common: string;
      };
      ces: {
        official: string;
        common: string;
      };
      cym: {
        official: string;
        common: string;
      };
      deu: {
        official: string;
        common: string;
      };
      est: {
        official: string;
        common: string;
      };
      fin: {
        official: string;
        common: string;
      };
      ita: {
        official: string;
        common: string;
      };
      kor: {
        official: string;
        common: string;
      };
      per: {
        official: string;
        common: string;
      };
  
    };
    latlng: number[];
    landlocked: boolean;
    borders: string[];
    area: number;
    demonyms: {
      eng: {
        f: string;
        m: string;
      };
      // Otros idiomas
    };
    flag: string;
    maps: {
      googleMaps: string;
      openStreetMaps: string;
    };
    population: number;
    gini: {
      2018: number;
    };
    fifa: string;
    car: {
      signs: string[];
      side: string;
    };
    timezones: string[];
    continents: string[];
    flags: {
      png: string;
      svg: string;
      alt: string;
    };
    coatOfArms: {
      png: string;
      svg: string;
    };
    startOfWeek: string;
    capitalInfo: {
      latlng: number[];
    };
    postalCode: {
      format: string;
      regex: string;
    };
  }