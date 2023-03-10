import { SET_COUNT, INC_COUNT, DEC_COUNT } from "../actions/counterActions";
const initialState = {
  count: 0,
  title: ""
};
export const counter = (state = initialState, action) => {
  switch (action.type) {
    case SET_COUNT:
      return {
        ...state,
        count: action.payload
      };
    case INC_COUNT:
      return {
        ...state,
        count: state.count + 1
      };
    case DEC_COUNT:
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
};
