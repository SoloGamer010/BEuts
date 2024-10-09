import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
// import { type } from "express/lib/response.js";

const Costumer = db.define(
    "Costumer",
    {
        costumer_id: {
            type: DataTypes.INTEGER,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        no_telp: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        tableName : 'Costumer'
    }
)

export default Costumer;