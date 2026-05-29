import dotenv from "dotenv";
dotenv.config();
import app from "./src/app.js";
import connectDB from "./src/config/database.js";

let port = process.env.PORT || 4000;

await connectDB()
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
