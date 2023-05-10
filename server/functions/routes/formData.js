const router = require("express").Router();
const admin = require("firebase-admin");
const db = admin.firestore();
db.settings({ ignoreUndefinedProperties: true });
router.post("/create", async (req, res) => {
  try {
    const id = Date.now();
    const data = {
      id: id,
      address: req.body.address,
      bloodgroup: req.body.bloodgroup,
      city: req.body.city,
      country: req.body.country,
      dateOfBirth: req.body.dateOfBirth,
      emContactNum: req.body.emContactNum,
      email: req.body.email,
      govtId: req.body.govtId,
      govtIdInput: req.body.govtIdInput,
      guardian: req.body.guardian,
      guardianInput: req.body.guardianInput,
      maritalstatus: req.body.maritalstatus,
      mobile: req.body.mobile,
      name: req.body.name,
      nationality: req.body.nationality,
      occupation: req.body.occupation,
      pincode: req.body.pincode,
      religion: req.body.religion,
      sex: req.body.sex,
      state: req.body.state,
    };

    const response = await db.collection("formdata").doc(`/${id}/`).set(data);
    return res.status(200).send({ success: true, data: response });
  } catch (err) {
    return res.send({ success: false, msg: `Error:${err}` });
  }
});

module.exports = router;
