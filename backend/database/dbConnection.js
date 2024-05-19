import mongoose, { mongo } from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbname: "ZEECARE_DATABASE",
    })
    .then(() => {
      console.log("Connected to Database!");
    })
    .catch((err) => {
      console.log(`Some error occured while connecting to databse: ${err}`);
    });
};
