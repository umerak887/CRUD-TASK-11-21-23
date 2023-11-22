import courseModel from "../model/course/course.js";
import studentModel from "../model/student/student.js";
import teacherModel from "../model/teacher/teacher.js";

const dbInit = async () => {
  studentModel.sync({
    alter: true,
    force: false,
  });
  teacherModel.sync({
    alter: true,
    force: false,
  });
  courseModel.sync({
    alter: true,
    force: false,
  });
};

export default dbInit;
