import * as yup from "yup";
export const dataFormSchema = yup.object().shape({
  address: yup.string(),
  bloodgroup: yup.string(),
  city: yup.string(),
  country: yup.string(),
  dateOfBirth: yup.string().required(),
  emContactNum: yup.string(),
  email: yup.string().email(),
  govtId: yup.string(),
  govtIdInput: yup.string().when("govtId", (govtId, schema) => {
     if (govtId == "Aadhar") {
      return schema.length(12);
    } else if (govtId == "PAN") {
      return schema.length(10);
    } else {
      return schema;
    }
  }),
  guardian: yup.string(),
  guardianInput: yup.string(),
  maritalstatus: yup.string(),
  mobile: yup.string(),
  name: yup.string().required(),
  nationality: yup.string(),
  occupation: yup.string(),
  pincode: yup.string(),
  religion: yup.string(),
  sex: yup.string().required(),
  state: yup.string(),
});
