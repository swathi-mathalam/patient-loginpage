import {
  CREATE_PATIENT_REQUEST,
  CREATE_PATIENT_SUCCESS,
  CREATE_PATIENT_FAILURE,
} from "../actions/patientActions";

const initialState = {
  patients: [],
  loading: false,
  error: null,
};

const patientReducer = (
  state = initialState,
  action
) => {
  console.log(
    "Reducer Action:",
    action.type
  );

  switch (action.type) {
    case CREATE_PATIENT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case CREATE_PATIENT_SUCCESS:
      console.log(
        "Patient Added:",
        action.payload
      );

      return {
        ...state,
        loading: false,
        patients: [
          ...state.patients,
          action.payload,
        ],
      };

    case CREATE_PATIENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default patientReducer;