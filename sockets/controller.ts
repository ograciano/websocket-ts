import io from 'socket.io';

export const socketController = (socket: io.Socket) => {
    console.log('cliente conectado', socket.id);

    socket.on('disconnect', () => {
        console.log('Cliente Desconectado', socket.id);
    })

    socket.on('enviar-mensaje', (payload, callback) => {
        const id: number = 123456;
        callback(id);
        socket.broadcast.emit('enviar-mensaje', payload);
    })

}