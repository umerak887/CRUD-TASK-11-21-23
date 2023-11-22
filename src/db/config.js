import { Sequelize } from "sequelize";

const sequilize = new Sequelize("crud", "postgres", "admin", {
  host: "localhost",
  port: 5432,
  dialect: "postgres",
});

export const connectDb = async () => {
  try {
    await sequilize.authenticate();
    console.log("connect established");
  } catch (error) {
    console.log("error occured while connecting");
  }
};
export default sequilize;
