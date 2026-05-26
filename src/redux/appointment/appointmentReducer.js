import * as types from "./appointmentTypes";

const initialState = {
  appointments: [],
  loading: false,
  error: null,
};

const appointmentReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case types.GET_APPOINTMENTS:
      return {
        ...state,
         loading: true,
      };

    case types.SET_APPOINTMENTS:
      return {
        ...state,
        loading: false,
        appointments:
          action.payload,
      };

    case types.ADD_APPOINTMENT:
      return {
        ...state,
        appointments: [
          action.payload,
          ...state.appointments,
        ],
      };

    case types.REMOVE_APPOINTMENT:
      return {
        ...state,
        appointments:
          state.appointments.filter(
            (item) =>
              item.appointmentId !==
              action.payload
          ),
      };
 case types.APPOINTMENT_ERROR:
      return {
        ...state,
        loading: false,
        error:
          action.payload,
      };

    default:
      return state;
  }
};

export default appointmentReducer;