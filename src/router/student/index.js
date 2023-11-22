import { Router } from "express";
import studentController from "../../controller/student/index.js";

const studentRouter = Router();
studentRouter.post("/", studentController.create);
studentRouter.get("/", studentController.getAll);
studentRouter.put("/:id", studentController.update);
studentRouter.get("/search/:id", studentController.getOne);
studentRouter.delete("/:id", studentController.delete);

export default studentRouter;
