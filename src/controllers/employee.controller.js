import Employee from "../models/employee.model.js";
import expressAsyncHandler from "express-async-handler";
const registerEmployee = expressAsyncHandler(async (req, res) => {
  const { name, email, id, role, address } = req.body;
  if (!name || !email || !id || !role || !address) {
    res.status(400).json({ message: "all the fields are required" });
  } else {
    const foundEmp = await Employee.findOne({ email, id });
    if (foundEmp) {
      res.status(400).send({ message: "user already exist" });
    } else {
      const registeredEmp = await Employee.create({
        name,
        email,
        id,
        role,
        address,
      });
      if (registerEmployee) {
        res.status(201).json(registeredEmp);
      }
    }
  }
});

const getAllEmployees = expressAsyncHandler(async (req, res) => {
  try {
    const foundEmps = await Employee.find().select(
      "name email id role address -_id"
    );
    if (!foundEmps) {
      res.status(404).json({ message: "No employees found" });
    } else {
      res.status(200).json(foundEmps);
    }
  } catch (error) {
    res.send(error.message);
  }
  
});

export { getAllEmployees, registerEmployee };
