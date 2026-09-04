const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute.js");

const dns = require("node:dns");
const mongodb_url =
  "mongodb+srv://Kosiasiko:xxxxxx@cluster0.uzw0b7z.mongodb.net/student_Database?appName=Cluster0";
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
