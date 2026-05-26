import * as types from "./appointmentTypes";

export const getAppointments =
  () => ({
    type:
      types.GET_APPOINTMENTS,
  });

export const setAppointments =
  (data) => ({
    type:
      types.SET_APPOINTMENTS,
    payload: data,
  });
  export const createAppointment =
  (data) => ({
    type:
      types.CREATE_APPOINTMENT,
    payload: data,
  });

export const addAppointment =
  (data) => ({
    type:
      types.ADD_APPOINTMENT,
    payload: data,
  });
  export const deleteAppointment =
  (id) => ({
    type:
      types.DELETE_APPOINTMENT,
    payload: id,
  });

export const removeAppointment =
  (id) => ({
    type:
      types.REMOVE_APPOINTMENT,
    payload: id,
  });
export const appointmentError =
  (error) => ({
    type:
      types.APPOINTMENT_ERROR,
    payload: error,
  });