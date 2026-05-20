export const CREATE_PATIENT_REQUEST =
  "CREATE_PATIENT_REQUEST";

export const CREATE_PATIENT_SUCCESS =
  "CREATE_PATIENT_SUCCESS";

export const CREATE_PATIENT_FAILURE =
  "CREATE_PATIENT_FAILURE";

export const createPatient = (data) => ({
  type: CREATE_PATIENT_REQUEST,
  payload: data,
});