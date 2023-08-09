import axios from "axios";
export const GET_COUNTRIES = "GET_COUNTRIES";
export const FILTER_CONTINENT = "FILTER_CONTINENT";
export const FILTER_ACTIVITY = "FILTER_ACTIVITY";
export const ORDER_NAME = "ORDER_NAME";
export const ORDER_POPULATION = "ORDER_POPULATION";
export const SEARCH_NAME = "SEARCH_NAME";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const POST_ACTIVITY = "POST_ACTIVITY";
export const GET_DETAIL = "GET_DETAIL";

export const getCountries = () => {
  return async function (dispatch) {
    const apiData = await axios.get("http://localhost:3001/countries");
    dispatch({ type: GET_COUNTRIES, payload: apiData.data });
  };
};

export const getActivities = () => {
  return async function (dispatch) {
    const apiDataActivities = await axios.get(
      "http://localhost:3001/activities"
    );
    dispatch({ type: GET_ACTIVITIES, payload: apiDataActivities.data });
  };
};

export const getCountryNames = () => {
  return async function (dispatch) {
    const apiData = await axios.get("http://localhost:3001/countries");
    dispatch({ type: GET_COUNTRIES, payload: apiData.data });
  };
};

export const postActivity = (payload) => {
  console.log(payload);
  return async function (dispatch) {
    const response = await axios.post(
      "http://localhost:3001/activities",
      payload
    );
    return response;
  };
};

export const filterByContinent = (payload) => {
  console.log(payload);
  return {
    type: "FILTER_CONTINENT",
    payload,
  };
};

export const filterByActivity = (payload) => {
  return {
    type: "FILTER_ACTIVITY",
    payload,
  };
};

export const orderByName = (payload) => {
  return {
    type: "ORDER_NAME",
    payload,
  };
};

export const orderByPopulation = (payload) => {
  return {
    type: "ORDER_POPULATION",
    payload,
  };
};

export const getDetail = (id) => {
  return async function (dispatch) {
    try {
      var json = await axios.get("http://localhost:3001/countries/" + id);
      return dispatch({
        type: "GET_DETAIL",
        payload: json.data,
      });
    } catch (error) {
      return error.message;
    }
  };
};

export const searchByName = (name) => {
  return async function (dispatch) {
    try {
      var json = await axios.get(
        "http://localhost:3001/countries?name=" + name
      );
      return dispatch({
        type: "SEARCH_NAME",
        payload: json.data,
      });
    } catch (error) {
      return error.message;
    }
  };
};
