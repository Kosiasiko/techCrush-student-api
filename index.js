import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute.js";

import dns from "node:dns";

const mongodb_url =
  "mongodb+srv://Kosiasiko:Kosiasiko12345@cluster0.uzw0b7z.mongodb.net/student_Database?appName=Cluster0";
dns.setServers(["8.8.8.8", "1.1.1.1"]);
const app = express();
const PORT = 4444;

app.use(express.json());
mongoose
  .connect(mongodb_url)
  .then(() => console.log("MongoDB Successfully Connected ✅✔🎉"))
  .catch((err) => console.error("Connection error ❌❌❌:", err));

app.get("/", (req, res) => {
  res.send("Server is active");
});

app.use("/student", userRoute);
app.listen(PORT, () => {
  console.log(`Server is listen on port: ${PORT} ✅✅✅`);
});
