import { Router } from "express";
import courseController from "../../controller/course/index.js";

const courseRouter = Router();
courseRouter.post("/", courseController.create);
courseRouter.get("/", courseController.getAll);
courseRouter.get("/search/:id", courseController.getOne);
courseRouter.put("/:id", courseController.update);
courseRouter.delete("/:id", courseController.delete);

export default courseRouter;
