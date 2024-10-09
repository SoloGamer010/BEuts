import { DataTypes } from "sequelize";
import db from "../utils/connection.js";

const Hotel = db.define(
    "Hotel",
    {
        hotel_id: {
            type: DataTypes.INTEGER,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        rating: {
            type: DataTypes.FLOAT
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
    },
    {
        tableName : 'Hotel'
    }
)

export default Hotel