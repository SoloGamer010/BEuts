import { DataTypes } from "sequelize";
import db from "../utils/connection.js";

const Pembayaran = db.define(
    "Pembayaran",
    {
        pembayaran_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        reservasi_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        tgl_pembayaran: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        amount: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        metode: {
            type: DataTypes.ENUM('credit_card', 'debit_card', 'cash', 'online'),
            allowNull: false
        },
    },
    {
        tableName: 'Pembayaran'
    }
);

export default Pembayaran;