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
varport = process.env.port || 3000;

app.listen(port,()=>{
    console.log("App running at http://localhost:"+port)
})