import app from "./app";
import {ActivityService} from "./models/service/activityService/activityService";

const PORT = 3000;

let activitiesService = new ActivityService();

let http = app.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
});

let io = require('socket.io')(http);

io.on('connection', function(socket: any) {
    console.log('User connected');
});

io.on('activities', function(socket: any) {
    io.emit('activities', {type: 'load-activities', content: activitiesService.getActivities()});
});

function sendActivities() {
    console.log('activity emited');
    io.emit('activityHappened', {type: 'new-activity', content: activitiesService.getRandomActivity()});
}

setInterval(sendActivities, 3000);