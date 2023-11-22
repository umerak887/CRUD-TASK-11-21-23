import teacherModel from "../../model/teacher/teacher.js";

const teacherController = {
  create: async (req, res) => {
    try {
      const { firstName, lastName, email, subject } = req.body;
      const teacher = await teacherModel.create({
        firstName,
        lastName,
        email,
        subject,
      });
      return res.status(201).json({ msg: "Teacher Created", teacher });
    } catch (error) {
      return res.status(400).json({ msg: "Sommething wrong happened" });
    }
  },
  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      const teacher = await teacherModel.findOne({
        where: {
          id: id,
        },
      });
      if (!course) {
        return res.status(404).json({ msg: `Teacher with id ${id} found` });
      }
      return res.status(200).json({ teacher });
    } catch (error) {
      return res.status(404).json({ msg: "No Data Found" });
    }
  },
  getAll: async (req, res) => {
    try {
      const teachers = await teacherModel.findAll();
      return res.status(200).json({ teachers });
    } catch (error) {
      return res.status(404).json({ msg: "No Data Found" });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { firstName, lastName, email, subject } = req.body;
      const teacher = await teacherModel.findOne({
        where: {
          id: id,
        },
      });
      if (!teacher) {
        return res.status(404).json({ msg: "Teacher not found" });
      } else {
        teacher.firstName = firstName;
        teacher.lastName = lastName;
        teacher.email = email;
        teacher.subject = subject;
        teacher.save();
        return res.status(200).json({ msg: "Teacher Updated", teacher });
      }
    } catch (error) {
      return res.status(400).json({ msg: "Something went wrong" });
    }
  },
  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const teacher = await teacherModel.findOne({
        where: {
          id: id,
        },
      });
      if (!teacher) {
        return res.status(404).json({ msg: "Teacher not found" });
      } else {
        await teacher.destroy();
        return res.status(200).json({ msg: "Teacher Deleted" });
      }
    } catch (error) {
      return res.status(400).json({ msg: "Something went wrong" });
    }
  },
};
export default teacherController;
