import express from "express";
import { connectDb } from "./db/config.js";
import dbInit from "./db/init.js";
import allRoutes from "./router/index.js";

const app = express();
connectDb();
const PORT = 3031;
app.use(express.json());
app.use("/", allRoutes);
dbInit()
  .then(console.log("table creates"))
  .catch((err) => console.log("error occured"));

app.listen(PORT, (error) => {
  if (!error) {
    console.log(`http://localhost:${PORT}`);
  } else {
    console.log("error occured");
  }
});
