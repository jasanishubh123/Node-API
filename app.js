var express= require('express');
var bodyparser=require("body-parser");
var path= require("path")
var app=express();
app.use(bodyparser.json());

 app.use(bodyparser.urlencoded({extended:true}));
 app.use("/Upload",express.static(path.join('Upload')))
var cors=require("cors");
app.use(cors({origin:"http://localhost:3000"}));

var EmployeeController=require("./Controller/EmloyeeController");

app.use('/',EmployeeController);

app.listen(8888);

