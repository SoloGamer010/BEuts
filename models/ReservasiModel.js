import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Kamar from "./KamarModel.js";

const Reservasi = db.define(
    "Reservasi",
    {
        reservasi_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        Kamar_id: {
            type: DataTypes.INTEGER,
            references: {
              model: Kamar,
              key: 'room_id',
            },
        },
        check_in_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        check_out_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        total_harga: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        status: {
            type: DataTypes.ENUM('confirmed', 'canceled', 'completed'),
            allowNull: false,
            defaultValue: 'confirmed'
        },
    },
    {
        tableName: 'Reservasi'
    }
);

export default Reservasi;