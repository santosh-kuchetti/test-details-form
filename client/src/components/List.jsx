import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../config/firebase.config";
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.flash.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";
import $ from "jquery";
import '../List.css'
import { useNavigate } from "react-router-dom";
$.DataTable = require("datatables.net-dt");
const List = () => {
  const navigate = useNavigate();
  const [allData, setAllData] = useState([]);

  const getdata = async () => {
    const querySnapshot = await getDocs(collection(db, "formdata"));
    let arr = [];
    querySnapshot.forEach((doc) => {
      arr.push(doc.data());
    });
    setAllData(arr);

    $(document).ready(function () {
      setTimeout(function () {
        $("#reqtable").DataTable({
          searching: true,
          bDestroy: true,
        });
      }, 1000);
    });
  };
  useEffect(() => {
    getdata();
  }, [allData]);

  const showTable = () => {
    try {
      return allData.map((item, index) => {
        return (
          <tr key={item.id}>
            <td className="text-xs font-weight-bold">{index + 1}</td>
            <td className="text-xs font-weight-bold">{item.name}</td>
            <td className="text-xs font-weight-bold">{item.dateOfBirth}</td>
            <td className="text-xs font-weight-bold">{item.mobile}</td>
            <td className="text-xs font-weight-bold">{item.address}</td>
            <td className="text-xs font-weight-bold">{item.govtIdInput}</td>
            <td className="text-xs font-weight-bold">{item.guardianInput}</td>
            <td className="text-xs font-weight-bold">{item.nationality}</td>
          </tr>
        );
      });
    } catch (e) {
      alert(e.message);
    }
  };
  return (
    <div className="topDiv container-fluid py-4">
      <div className="tablemain table-responsive p-0 pb-2">
        <button className="formButton" onClick={()=>navigate("/", { replace: true })}>Form</button>
        <table
          id="reqtable"
          className="table align-items-center justify-content-center mb-0"
        >
          <thead>
            <tr>
              <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">
                S/N
              </th>
              <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">
                Name
              </th>
              <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">
                Age
              </th>
              <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">
                Mobile
              </th>
              <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">
                Address
              </th>
              <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">
                GovtId
              </th>
              <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">
                Guardian details
              </th>
              <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">
                Nationality
              </th>
            </tr>
          </thead>

          <tbody>{showTable()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default List;
