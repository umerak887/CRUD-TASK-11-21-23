import sequilize from "../../db/config.js";
import { DataTypes } from "sequelize";

const teacherModel = sequilize.define("Teacher", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  subject: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default teacherModel;
