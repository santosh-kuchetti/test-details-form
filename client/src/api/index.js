import axios from "axios";

export const baseURL = "http://localhost:5001/data-form-51281/us-central1/app";

//add new data

export const addNewData = async (data) => {
  try {
    const res = await axios.post(`${baseURL}/api/formdata/create`, { ...data });
    return res.data.data;
  } catch (err) {
    return null;
  }
};

