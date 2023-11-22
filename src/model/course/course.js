import sequilize from "../../db/config.js";
import { DataTypes } from "sequelize";

const courseModel = sequilize.define("Course", {
  courseName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default courseModel;
