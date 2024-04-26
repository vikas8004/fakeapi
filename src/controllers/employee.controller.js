import Employee from "../models/employee.model.js";
const registerEmployee = async (req, res) => {
  const { name, email, id, role, address } = req.body;
  if (!name || !email || !id || !role || !address) {
    throw new Error("all the fields are required");
  } else {
    const foundEmp = await Employee.findOne({ email, id });
    if (foundEmp) {
      throw new Error("employee already exist");
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
};

const getAllEmployees = async (req, res) => {
  const foundEmps = await Employee.find().select(
    "name email id role address -_id"
  );
  if (!foundEmps) {
    throw new Error("something went wrong");
  } else {
    res.status(200).json(foundEmps);
  }
};

export { getAllEmployees, registerEmployee };
