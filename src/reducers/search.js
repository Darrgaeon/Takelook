import {
  SEARCH_LOAD_REQUEST,
  SEARCH_LOAD_SUCCESS,
  SEARCH_LOAD_FAIL,
  RESULT_LOAD_REQUEST,
  RESULT_LOAD_SUCCESS,
  RESULT_LOAD_FAIL
} from "../actions/SearchActions";


const initialState = {
  data: [],
  isRedirect: "/"
};

export function getData(state = initialState, action) {
  switch (action.type) {
  case SEARCH_LOAD_REQUEST:
    return {...state,
      data: [],
      isRedirect: "/",
    };
  case SEARCH_LOAD_SUCCESS:
    return {...state,
      data: action.payload,
      isRedirect: "list",
    };
  case SEARCH_LOAD_FAIL:
    return {...state,
      message: action.payload,
    };

  case RESULT_LOAD_REQUEST:
    return {...state,
      dataResult: [],
      isRedirect: "list",
    };
  case RESULT_LOAD_SUCCESS:
    return {...state,
      data: action.payload,
      isRedirect: "result",
    };
  case RESULT_LOAD_FAIL:
    return {...state,
      message: action.payload,
    };

  default:
    return state;
  }
}
