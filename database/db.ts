import mongoose from 'mongoose';
import { idText } from 'typescript';

/**
 * 0 = disconnected
 * 1 = connected
 * 2 = connecting
 * 3 = disconnecting
 */


const mongooConection = {
    isConected: 0
}

export const connect = async () => {
    if(mongooConection.isConected) {
        console.log('ya estamos conectados');
        return;
    }

    if(mongoose.connections.length > 0){
        mongooConection.isConected = mongoose.connections[0].readyState;

        if(mongooConection.isConected === 1){
            console.log('Usando conexion anterior');
            return;
        }

        await mongoose.disconnect();
    }

    await mongoose.connect('....');
    mongooConection.isConected = 1;
    console.log('conectado a mongo db:', '....');

}

export const disconnect = async () => {
    
    if(mongooConection.isConected != 0) return ;
    
    await mongoose.disconnect();
    console.log('Desconectado de MongoDB');
}