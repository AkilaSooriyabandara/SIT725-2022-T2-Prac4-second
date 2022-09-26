require('dotenv').config()
var express = require("express");
var app = express();
var cors = require('cors')
let dbConnect = require("./dbConnect");
let projectsRoute = ("./routes/projectRoutes");
let userRoute = require("./routes/userRoutes")

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(cors())

app.use('/api/projects', projectRoutes)
app.use('api/user', userRoute)

app.get('/addTwoNumbers/n1/n2', function(request, response){
    response.sendStatus(200);

})

let io = require('socket.io')(http);
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  setInterval(()=>{
    socket.emit('number', parseInt(Math.random()*10));
  }, 1000);

});

varport = process.env.port || 3000;

htpp.listen(port,()=>{
    console.log("App running at http://localhost:"+port)
})