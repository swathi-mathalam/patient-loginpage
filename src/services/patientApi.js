import axios from "axios";

export const createPatientApi = async (
  patientData
) => {
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/users",
    patientData
  );

  return response.data;
};