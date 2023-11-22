import courseModel from "../../model/course/course.js";

const courseController = {
  create: async (req, res) => {
    try {
      const { courseName, description } = req.body;
      const courses = await courseModel.create({
        courseName,
        description,
      });
      return res.status(201).json({ msg: "Course Created", courses });
    } catch (error) {
      return res.status(400).json({ msg: "Sommething wrong happened" });
    }
  },
  getAll: async (req, res) => {
    try {
      const courses = await courseModel.findAll();
      return res.status(200).json({ courses });
    } catch (error) {
      return res.status(404).json({ msg: "No Data Found" });
    }
  },
  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      const course = await courseModel.findOne({
        where: {
          id: id,
        },
      });
      if (!course) {
        return res.status(404).json({ msg: `no course with id ${id} found` });
      }
      return res.status(200).json({ course });
    } catch (error) {
      return res.status(404).json({ msg: "No Data Found" });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { courseName, description } = req.body;
      const course = await courseModel.findOne({
        where: {
          id: id,
        },
      });
      if (!course) {
        return res.status(404).json({ msg: "course not found" });
      } else {
        course.courseName = courseName;
        course.description = description;
        await course.save();
        return res.status(200).json(course);
      }
    } catch (error) {
      return res.status(400).json({ msg: "Something went wrong" });
    }
  },
  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const course = await courseModel.findOne({
        where: {
          id: id,
        },
      });
      if (!course) {
        return res.status(404).json({ msg: "Course not found" });
      } else {
        await course.destroy();
        return res.status(200).json({ msg: "Course Deleted" });
      }
    } catch (error) {
      return res.status(400).json({ msg: "Something went wrong" });
    }
  },
};
export default courseController;
