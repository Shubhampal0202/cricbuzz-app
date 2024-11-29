import axios from "axios";
export const fetchMatches = (matchType) => {
  const options = {
    method: "GET",
    url: `https://${process.env.REACT_APP_RAPID_API_HOST}/matches/v1/${matchType}`,
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST,
    },
  };
  return async (dispatch) => {
    dispatch({ type: "fetch-matches-request" });
    try {
      const {
        data: { typeMatches },
      } = await axios.request(options);
      dispatch({ type: "fetch-matches-success", payload: typeMatches });
    } catch (error) {
      dispatch({ type: "fetch-matches-failure", payload: error });
    }
  };
};
