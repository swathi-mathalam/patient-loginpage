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
  switch (action.type) {
    case CREATE_PATIENT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case CREATE_PATIENT_SUCCESS:
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