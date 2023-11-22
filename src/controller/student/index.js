import studentModel from "../../model/student/student.js";

const studentController = {
  create: async (req, res) => {
    try {
      const { firstName, lastName, email, phone } = req.body;
      const student = await studentModel.create({
        firstName,
        lastName,
        email,
        phone,
      });
      return res.status(201).json({ msg: "Student Created", student });
    } catch (error) {
      return res.status(400).json({ msg: "Sommething wrong happened" });
    }
  },
  getAll: async (req, res) => {
    try {
      const students = await studentModel.findAll();
      return res.status(200).json({ students });
    } catch (error) {
      return res.status(404).json({ msg: "No Data Found" });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { firstName, lastName, email, phone } = req.body;
      const student = await studentModel.findOne({
        where: {
          id: id,
        },
      });
      if (!student) {
        return res.status(404).json({ msg: "course not found" });
      } else {
        student.firstName = firstName;
        student.lastName = lastName;
        student.email = email;
        student.phone = phone;
        student.save();
        return res.status(200).json({ msg: "Student Updated", student });
      }
    } catch (error) {
      return res.status(400).json({ msg: "Something went wrong" });
    }
  },
  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      const student = await studentModel.findOne({
        where: {
          id: id,
        },
      });
      if (!course) {
        return res.status(404).json({ msg: `Student with id ${id} found` });
      }
      return res.status(200).json({ student });
    } catch (error) {
      return res.status(404).json({ msg: "No Data Found" });
    }
  },
  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const student = await studentModel.findOne({
        where: {
          id: id,
        },
      });
      if (!student) {
        return res.status(404).json({ msg: "Student not found" });
      } else {
        await student.destroy();
        return res.status(200).json({ msg: "Student Deleted" });
      }
    } catch (error) {
      return res.status(400).json({ msg: "Something went wrong" });
    }
  },
};
export default studentController;
