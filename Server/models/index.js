import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";
import UserModel from "./user.model.js";

const User = UserModel(sequelize, DataTypes);

// Sync all models
sequelize.sync({ alter: true })
  .then(() => console.log("PostgreSQL Synced"))
  .catch(err => console.error("Sync Error:", err));

export { User };
