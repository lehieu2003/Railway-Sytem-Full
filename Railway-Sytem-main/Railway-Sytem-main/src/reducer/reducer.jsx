import {
  LOGIN,
  LOGOUT,
  FIND_TICKET,
  BUY_TICKET,
  CHECK_INFO_TICKET,
  RETURN_TICKET,
  SELECT_TICKET,
  TRAIN_TRIP,
} from "../components/action/actionTypes";

const initialState = {
  isAuthenticated: false,
  user: null,
  tickets: [],
  ticketInfo: null,
  trainTrips: [],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    case FIND_TICKET:
      return {
        ...state,
        tickets: action.payload,
      };
    case BUY_TICKET:
      return {
        ...state,
        ticketInfo: action.payload,
      };
    case CHECK_INFO_TICKET:
      return {
        ...state,
        ticketInfo: action.payload,
      };
    case RETURN_TICKET:
      return {
        ...state,
        ticketInfo: action.payload,
      };
    case SELECT_TICKET:
      return {
        ...state,
        ticketInfo: action.payload,
      };

    case TRAIN_TRIP:
      return {
        ...state,
        trainTrips: state.trainTrips.map(
          (trip) => (trip = { ...trip, ...action.payload })
        ),
      };

    default:
      return state;
  }
};
