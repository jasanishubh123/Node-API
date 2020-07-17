// var mongoose=require('../Config/db');
// var MySchema=mongoose.Schema({
//     Bookname:String,
//     Category:String,
//     Author:String,
//     Price:Number,
   
// })
// var BookStore=mongoose.model("BookStore",MySchema,"BookStores")
// module.exports=BookStore;

var mongoose=require("../Config/db")
var EmployeeSchema=mongoose.Schema({
    Name:String,
    Age:Number,
    Salary:Number,
    // Image:String,
    // ImageURL:String
})
var EmployeeStore=mongoose.model("EmployeeStore",EmployeeSchema,"EmployeeStore");

module.exports=EmployeeStore;