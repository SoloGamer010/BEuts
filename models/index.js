import db from "../utils/connection.js"
import Pembayaran from "../models/PembayaranModel.js"
import Hotel from "../models/HotelModel.js"
import Reservasi from "../models/ReservasiModel.js"
import Kamar from "../models/KamarModel.js"
import Costumer from "../models/CostumerModel.js"

// Definisi relasi antar tabel
Hotel.hasMany(Kamar, { 
    foreignKey: 'hotel_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
Kamar.belongsTo(Hotel, { 
    foreignKey: 'hotel_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

Costumer.hasMany(Reservasi, { foreignKey: 'costumer_id' });
Reservasi.belongsTo(Costumer, { foreignKey: 'costumer_id' });

Kamar.hasMany(Reservasi, { 
    foreignKey: 'kamar_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
Reservasi.belongsTo(Kamar, { foreignKey: 'kamar_id' });

Reservasi.hasOne(Pembayaran)
Pembayaran.belongsTo(Reservasi)

// Fungsi untuk sinkronisasi model
const syncModels = async () => {
    try {

    console.log('All tables dropped');
     // Sinkronisasi model satu per satu
    await Hotel.sync({ force: true });
    console.log('Hotel table synchronized');
 
    await Kamar.sync({ force: true });
    console.log('Kamar table synchronized');
 
    await Costumer.sync({ force: true });
    console.log('Costumer table synchronized');
 
    await Reservasi.sync({ force: true });
    console.log('Reservasi table synchronized');
 
    console.log('All models were synchronized successfully.');
    } catch (error) {
        console.error('An error occurred while synchronizing the models:', error);
    }
};

// Jalankan sinkronisasi
syncModels();

export { Reservasi, Costumer, Kamar, Hotel, db };