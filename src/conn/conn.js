import mongoose from "mongoose";

async function connect() {
  try {
    const con = await mongoose.connect(process.env.MONGO_URI);
    if (con) {
      console.log("connected to database successfully", con.connection.host);
    }
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
}

export default connect;
