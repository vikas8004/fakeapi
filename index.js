import app from "./src/app.js";
import dotenv from "dotenv";
import connect from "./src/conn/conn.js";
dotenv.config();
app.listen(process.env.PORT, () => {
  console.log(`app is running on port number ${process.env.PORT}`);
  connect()
});
