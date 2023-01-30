const express = require('express');
const cors = require('cors')
const app = express();
const http = require('http')

const server = http.createServer(app);

const io = require('socket.io')(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
})

app.use(cors());
app.get('/', (req, res) => {
    res.send('ACAB')
})

io.on('connection', (socket) => {
    console.log(socket.id);

    socket.emit('me', socket.id);
    socket.on('disconnect', () => {
        socket.broadcast.emit('callended');
    })
    console.log(socket);
    socket.on('callUser', ({ userToCall, signalData, from, name}) => {
        io.to(userToCall).emit('callUser', { signal: signalData, from, name})
    })

    socket.on('answerCall', (data) => {
        io.to(data.to).emit('callAccepted', data.signal)
    })

})

server.listen(5000, () => {
    console.log('server radi mozda')
})