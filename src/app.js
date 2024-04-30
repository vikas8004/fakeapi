import express from "express";
import cors from "cors";
import employeeRouter from "./routes/employee.router.js";
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/v1", employeeRouter);
app.get("/", (req, res) => {
  res.status(200).send({ message: "this is home page" });
});
export default app;
