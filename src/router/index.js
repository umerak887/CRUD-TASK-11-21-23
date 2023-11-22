import teacherRouter from "./teacher/index.js";
import courseRouter from "./course/index.js";
import studentRouter from "./student/index.js";
import { Router } from "express";

const allRoutes = Router();

allRoutes.use("/students", studentRouter);
allRoutes.use("/teachers", teacherRouter);
allRoutes.use("/courses", courseRouter);

export default allRoutes;
