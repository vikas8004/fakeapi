import express from "express";
import {
  getAllEmployees,
  registerEmployee,
} from "../controllers/employee.controller.js";
const employeeRouter = express.Router();

employeeRouter.route("/employee").get(getAllEmployees).post(registerEmployee);

export default employeeRouter;
