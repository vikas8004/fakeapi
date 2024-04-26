import express from "express";
import cors from "cors";
import employeeRouter from "./routers/employee.router.js";
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/v1", employeeRouter);
export default app;
