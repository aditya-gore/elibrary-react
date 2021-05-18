import axios from "axios";

// Set Loading
export const setLoading = (dispatch, status) =>
  dispatch({ type: "SET_LOADING", payload: status });

// Set Error
export const setError = (dispatch, error) =>
  dispatch({
    type: "SET_ERROR",
    payload: { error: error.status, message: error.message },
  });

// Set Login

//Logout

// Set User (get user info)
export const getUser = async (dispatch) => {
  setLoading(dispatch, true);

  // do fetch
  await axios
    .get(`http://localhost:8000/api/user`)
    .then((res) => {
      const result = res.data;

      // set user info
      dispatch({
        type: "SET_USER",
        payload: result,
      });
    })
    .catch((error) => {
      const result = error;

      // set error if has any
      dispatch({
        type: "SET_ERROR",
        payload: {
          error: true,
          message: result,
        },
      });
    });
};
