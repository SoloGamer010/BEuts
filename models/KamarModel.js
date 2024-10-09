import { DataTypes } from "sequelize";
import db from "../utils/connection.js";

const Kamar = db.define(
    "Kamar",
    {
        kamar_id: {
            type: DataTypes.INTEGER,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true,
        },
        hotel_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        room_type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        avaibility: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
    },
    {
        tableName : 'Kamar'
    }
)

export default Kamar;