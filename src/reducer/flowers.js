import {GET_FLOWERS, GET_FLOWER, START, SUCCESS} from "../constance";

const defaultState = {
  data: [],
  loading: false,
  loaded: false,
  flowerData: [],
};

export default (state = defaultState, action) => {
  const {type, responseAPI} = action;
  switch (type) {

    case GET_FLOWERS + START:
      return {
        ...state,
        loading: true,
      };

    case GET_FLOWERS + SUCCESS:
      return {
        ...state,
        data: responseAPI,
        loading: false,
        loaded: true,
      };

    case GET_FLOWER + SUCCESS:
      return {
        ...state,
        flowerData: responseAPI,
        loading: false,
        loaded: true,
      };

    default:
      return state;
  }
}