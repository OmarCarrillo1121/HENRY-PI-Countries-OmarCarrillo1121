import {
  GET_COUNTRIES,
  FILTER_CONTINENT,
  FILTER_ACTIVITY,
  ORDER_NAME,
  ORDER_POPULATION,
  SEARCH_NAME,
  GET_ACTIVITIES,
  GET_DETAIL,
} from "./actions";

const initialState = {
  allCountries: [],
  countries: [],
  allActivities: [],
  activities: [],
  detail: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        allCountries: action.payload,
        countries: action.payload,
      };

    case FILTER_CONTINENT:
      const allCountries = state.allCountries;
      const continentFilter =
        action.payload === "All"
          ? allCountries
          : allCountries.filter(
              (country) => country.continent === action.payload
            );
      return { ...state, countries: continentFilter };

    case FILTER_ACTIVITY:
      const todosCountries = state.allCountries;
      const countriesWithActivities = todosCountries.filter((country) => {
        return country.Activities.length > 0;
      });

      const response = [];

      for (let i = 0; i < countriesWithActivities.length; i++) {
        for (let j = 0; j < countriesWithActivities[i].Activities.length; j++) {
          if (
            countriesWithActivities[i].Activities[j].name === action.payload
          ) {
            response.push(countriesWithActivities[i]);
          }
        }
      }

      const activityFilter =
        action.payload === "All" ? countriesWithActivities : response;

      return { ...state, countries: activityFilter };

    case ORDER_NAME:
      const sortedArr =
        action.payload === "AZ"
          ? state.countries.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.countries.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        characters: sortedArr,
      };

    case ORDER_POPULATION:
      const sortedArrPop =
        action.payload === "HL"
          ? state.countries.sort(function (a, b) {
              if (a.population > b.population) {
                return 1;
              }
              if (b.population > a.population) {
                return -1;
              }
              return 0;
            })
          : state.countries.sort(function (a, b) {
              if (a.population > b.population) {
                return -1;
              }
              if (b.population > a.population) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        characters: sortedArrPop,
      };

    case SEARCH_NAME:
      return { ...state, countries: action.payload };

    case GET_ACTIVITIES:
      return { ...state, allActivities: action.payload };

    case GET_DETAIL:
      return { ...state, detail: action.payload };

    case "POST_ACTIVITY":
      return { ...state };

    default:
      return { ...state };
  }
};

export default rootReducer;
