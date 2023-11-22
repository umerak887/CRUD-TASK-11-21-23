import { Router } from "express";
import teacherController from "../../controller/teacher/index.js";

const teacherRouter = Router();
teacherRouter.post("/", teacherController.create);
teacherRouter.get("/", teacherController.getAll);
teacherRouter.put("/:id", teacherController.update);
teacherRouter.get("/search/:id", teacherController.getOne);
teacherRouter.delete("/:id", teacherController.delete);

export default teacherRouter;
