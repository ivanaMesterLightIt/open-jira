import mongoose from 'mongoose';
import { idText } from 'typescript';

/**
 * 0 = disconnected
 * 1 = connected
 * 2 = connecting
 * 3 = disconnecting
 */


const mongoConection = {
    isConected: 0
}

export const connect = async () => {
    if(mongoConection.isConected) {
        console.log('ya estamos conectados');
        return;
    }

    if(mongoose.connections.length > 0){
        mongoConection.isConected = mongoose.connections[0].readyState;

        if(mongoConection.isConected === 1){
            console.log('Usando conexion anterior');
            return;
        }

        await mongoose.disconnect();
    }

    await mongoose.connect(process.env.MONGO_URL || '');
    mongoConection.isConected = 1;
    console.log('conectado a mongo db:', '....');

}

export const disconnect = async () => {

    if(process.env.NODE_ENV === 'development') return;
    
    if(mongoConection.isConected === 0) return ;
    
    await mongoose.disconnect();
    mongoConection.isConected = 0;

    console.log('Desconectado de MongoDB');
}