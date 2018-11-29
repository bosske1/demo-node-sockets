import app from "./app";
const PORT = 3000;

let http = app.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
});

let io = require('socket.io')(http);

io.on('connection', function(socket: any) {
    console.log('fock something happened');
});