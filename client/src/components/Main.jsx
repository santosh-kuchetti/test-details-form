import React from "react";
import "../Main.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { dataFormSchema } from "../validations/dataForm";
import { addNewData } from "../api";
const Main = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const submitData = async (e) => {
    let formData = {
      address: e.address,
      bloodgroup: e.bloodgroup,
      city: e.city,
      country: e.country,
      dateOfBirth: e.dateOfBirth,
      emContactNum: e.emContactNum,
      email: e.email,
      govtId: e.govtId,
      govtIdInput: e.govtIdInput,
      guardian: e.guardian,
      guardianInput: e.guardianInput,
      maritalstatus: e.maritalstatus,
      mobile: e.mobile,
      name: e.name,
      nationality: e.nationality,
      occupation: e.occupation,
      pincode: e.pincode,
      religion: e.religion,
      sex: e.sex,
      state: e.state,
    };
    const isValid = await dataFormSchema.isValid(formData);
    if (isValid) {
      addNewData(formData);
      navigate("/list", { replace: true });
    } else {
      alert("Please Check the Govt issued ID correctly and contact");
    }
  };
  return (
    <div className="main">
      <div className="header">
        <h1>DATA FORM</h1>
        <button
          className="tableview"
          onClick={() => navigate("/list", { replace: true })}
        >
          Table View
        </button>
      </div>
      <form onSubmit={handleSubmit((e) => submitData(e))}>
        <label className="label">Personal Details</label>
        <div className="personalDetails">
          <div className="lane1">
            <div className="span1">
              <label htmlFor="name" className="inputlables">
                Name
              </label>
              <input
                {...register("name", { required: "Please Enter the Name" })}
                id="name"
                placeholder="Enter Name"
              />
            </div>
            <div className="span2">
              <span>
                <label htmlFor="dateOfBirth" className="inputlables">
                  Date of Birth or Age
                </label>
                <input
                  {...register("dateOfBirth", {
                    required: "Please enter date of birth or Age",
                  })}
                  id="dateOfBirth"
                  placeholder="DD/MM/YYYY or Age in Years"
                />
              </span>
              <span>
                <label htmlFor="sex" className="inputlables">
                  Sex
                </label>
                <select
                  {...register("sex", { required: "Please select the Sex" })}
                  id="sex"
                >
                  <option value={""}>Enter Sex</option>
                  <option value={"male"}>Male</option>
                  <option value={"female"}>Female</option>
                  <option value={"others"}>Others</option>
                </select>
              </span>
            </div>
          </div>
          <div className="lane2">
            <div className="span1">
              <label htmlFor="mobile" className="inputlables">
                Mobile
              </label>
              <input
                {...register("mobile")}
                id="mobile"
                placeholder="Enter Mobile"
              />
            </div>
            <div className="span2">
              <span>
                <label htmlFor="govtId" className="inputlables">
                  Govt Issued ID
                </label>
                <select {...register("govtId")} id="govtId">
                  <option value={""}>Enter Govt ID</option>
                  <option value={"Aadhar"}>Aadhar</option>
                  <option value={"PAN"}>PAN </option>
                </select>
                <input
                  {...register("govtIdInput")}
                  id="govtIdInput"
                  placeholder="Enter Govt ID"
                />
              </span>
            </div>
          </div>
        </div>
        <label className="label">Contact Details</label>
        <div className="personalDetails">
          <div className="lane1">
            <div className="span1">
              <span>
                <label htmlFor="govtId" className="inputlables">
                  Guardian details
                </label>
                <select {...register("guardian")} id="guardian">
                  <option value={""}>Enter label</option>
                  <option value={"Aadhar"}>Father</option>
                  <option value={"PAN"}>Mother</option>
                  <option value={"PAN"}>Other</option>
                </select>
                <input
                  {...register("guardianInput")}
                  id="guardianInput"
                  placeholder="Enter Guardian Name"
                />
              </span>
            </div>
            <div className="span2">
              <span>
                <label htmlFor="email" className="inputlables">
                  Email
                </label>
                <input
                  {...register("email")}
                  id="email"
                  placeholder="Enter Email"
                />
              </span>
              <span>
                <label htmlFor="emContactNum" className="inputlables">
                  Emergency Contact Number
                </label>
                <input
                  {...register("emContactNum")}
                  id="emContactNum"
                  placeholder="Enter Emergency No"
                />
              </span>
            </div>
          </div>
        </div>
        <label className="label">Address Details</label>
        <div className="personalDetails">
          <div className="lane1">
            <div className="span1">
              <label htmlFor="address" className="inputlables">
                Address
              </label>
              <input
                {...register("address")}
                id="address"
                placeholder="Enter Address"
              />
            </div>
            <div className="span2">
              <span>
                <label htmlFor="state" className="inputlables">
                  State
                </label>
                <select {...register("state")} id="state">
                  <option value={""}>Enter State</option>
                  <option value={"Andrapradesh"}>Andrapradesh</option>
                  <option value={"ArunachalPradesh"}>ArunachalPradesh</option>
                  <option value={"Assam"}>Assam</option>
                  <option value={"Bihar"}>Bihar</option>
                  <option value={"Chhattisgarh"}>Chhattisgarh</option>
                  <option value={"Goa"}>Goa</option>
                  <option value={"Gujarath"}>Gujarath</option>
                  <option value={"Haryana"}>Haryana</option>
                  <option value={"Karnataka"}>Karnataka</option>
                  <option value={"Kerala"}>Kerala</option>
                  <option value={"Maharastra"}>Maharastra</option>
                  <option value={"Nagaland"}>Nagaland</option>
                  <option value={"Odisha"}>Odisha</option>
                  <option value={"Punjab"}>Punjab</option>
                  <option value={"Rajastan"}>Rajastan</option>
                  <option value={"Sikkim"}>Sikkim</option>
                  <option value={"Tamilnadu"}>Tamilnadu</option>
                  <option value={"Telangana"}>Telangana</option>
                  <option value={"Uttarakand"}>Uttarakand</option>
                  <option value={"UttaraPradesh"}>UttaraPradesh</option>
                  <option value={"Westbengal"}>Westbengal</option>
                </select>
              </span>
              <span>
                <label htmlFor="city" className="inputlables">
                  Cty
                </label>
                <select {...register("city")} id="city">
                  <option value={""}>Enter City</option>
                  <option value={"Hyderabadh"}>Hyderabadh</option>
                  <option value={"Bangalore"}>Bangalore</option>
                  <option value={"Gurgaon"}>Gurgaon</option>
                  <option value={"Delhi"}>Delhi</option>
                  <option value={"Mumai"}>Mumai</option>
                  <option value={"Kanpur"}>Kanpur</option>
                  <option value={"others"}>Other</option>
                </select>
              </span>
            </div>
          </div>
          <div className="lane2">
            <div className="span1">
              <label htmlFor="country" className="inputlables">
                Country
              </label>
              <input
                {...register("country")}
                id="country"
                placeholder="Enter Country"
              />
            </div>
            <div className="span2">
              <span>
                <label htmlFor="pincode" className="inputlables">
                  Pincode
                </label>
                <input
                  {...register("pincode")}
                  id="pincode"
                  placeholder="Enter Pincode"
                />
              </span>
            </div>
          </div>
        </div>
        <label className="label">Other Details</label>
        <div className="personalDetails">
          <div className="lastlane1">
            <div className="lastspan1">
              <label htmlFor="occupation" className="inputlables">
                Occupation
              </label>
              <input
                {...register("occupation")}
                id="occupation"
                placeholder="Enter Occupation"
              />
            </div>
            <div className="lastspan2">
              <span>
                <label htmlFor="religion" className="inputlables">
                  Religion
                </label>
                <select {...register("religion")} id="religion">
                  <option value={""}>Enter Religion</option>
                  <option value={"Hindu"}>Hindu</option>
                  <option value={"Christian"}>Christian</option>
                  <option value={"Muslim"}>Muslim</option>
                  <option value={"others"}>Other</option>
                </select>
              </span>
            </div>
            <div className="span3">
              <span>
                <label htmlFor="maritalstatus" className="inputlables">
                  Marital Status
                </label>
                <select {...register("maritalstatus")} id="maritalstatus">
                  <option value={""}>Enter Marital Status</option>
                  <option value={"Married"}>Married</option>
                  <option value={"Single"}>Single</option>
                  <option value={"others"}>Others</option>
                </select>
              </span>
            </div>
            <div className="span4">
              <span>
                <label htmlFor="bloodgroup" className="inputlables">
                  Blood Group
                </label>
                <select {...register("bloodgroup")} id="bloodgroup">
                  <option value={""}>Group</option>
                  <option value={"O+"}>O+</option>
                  <option value={"O-"}>O-</option>
                  <option value={"A+"}>A+</option>
                  <option value={"A-"}>A-</option>
                  <option value={"B+"}>B+</option>
                  <option value={"B-"}>B-</option>
                </select>
              </span>
            </div>
          </div>
          <div className="lane2">
            <div className="span1">
              <label htmlFor="nationality" className="inputlables">
                Nationality
              </label>
              <input
                {...register("nationality")}
                id="nationality"
                placeholder="Enter Nationality"
              />
            </div>
          </div>
        </div>
        <div className="buttons">
          <button className="cancel">CANCEL</button>
          <button className="submit" type="submit">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default Main;
