export const SEARCH_LOAD_REQUEST = "SEARCH_LOAD_REQUEST";
export const SEARCH_LOAD_SUCCESS = "SEARCH_LOAD_SUCCESS";
export const SEARCH_LOAD_FAIL = "SEARCH_LOAD_FAIL";

export const RESULT_LOAD_REQUEST = "RESULT_LOAD_REQUEST";
export const RESULT_LOAD_SUCCESS = "RESULT_LOAD_SUCCESS";
export const RESULT_LOAD_FAIL = "RESULT_LOAD_FAIL";

// export const TRAILER_LOAD_REQUEST = "TRAILER_LOAD_REQUEST";
// export const TRAILER_LOAD_SUCCESS = "TRAILER_LOAD_SUCCESS";
// export const TRAILER_LOAD_FAIL = "TRAILER_LOAD_FAIL";

export const searchRequest = () => ({
  type: SEARCH_LOAD_REQUEST
});

export const searchSuccess = (data) => ({
  type: SEARCH_LOAD_SUCCESS,
  payload: data
});

export const searchFail = (errorMsg) => ({
  type: SEARCH_LOAD_FAIL,
  payload: errorMsg
});

export const handleErrors = (response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

export const loadData = (url) => dispatch => {
  dispatch({
    type: searchRequest
  });

  fetch(url)
    .then(handleErrors)
    .then(res => res.json())
    .then(json => {
      dispatch(searchSuccess(json));
      return json;
    })
    .catch(error => dispatch(searchFail(error)));
};

export const resultRequest = () => ({
  type: RESULT_LOAD_REQUEST
});

export const resultSuccess = (data) => ({
  type: RESULT_LOAD_SUCCESS,
  payload: data
});

export const resultFail = (errorMsg) => ({
  type: RESULT_LOAD_FAIL,
  payload: errorMsg
});


export const loadResultData = (url) => dispatch => {
  dispatch({
    type: resultRequest
  });

  fetch(url)
    .then(handleErrors)
    .then(res => res.json())
    .then(json => {
      dispatch(resultSuccess(json));
      return json;
    })
    .catch(error => dispatch(resultFail(error)));
};


// export const trailerRequest = () => ({
//   type: TRAILER_LOAD_REQUEST
// });
//
// export const trailerSuccess = (trailer) => ({
//   type: TRAILER_LOAD_SUCCESS,
//   payload: trailer
// });
//
// export const trailerFail = (errorMsg) => ({
//   type: TRAILER_LOAD_FAIL,
//   payload: errorMsg
// });
//
//
// export const loadTrailer = (url) => dispatch => {
//   dispatch({
//     type: trailerRequest
//   });
//
//   axios.get(url)
//     .then(res => {
//       const $ = cheerio.load(res.data);
//
//       const $results = $("iframe");
//
//       let resultsArray = [];
//       for (let i = 0; i < $results.length; i++) {
//         resultsArray.push($($results[i]).attr("src"));
//       }
//
//       if (resultsArray) {
//         dispatch(trailerSuccess(resultsArray));
//       } else {
//         dispatch(trailerFail("Ошибка при загрузке страницы..."));
//       }
//     })
//     .catch(() => dispatch(searchFail(defaultErrorMsg)));
// };
