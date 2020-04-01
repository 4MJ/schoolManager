var feeManager = require('./fee_manager.js');
var studentManager = require('./student.js');
var fs=require('fs');
var http = require('http');
var forms= require("formidable");


var studentID = 1;
var gender="male";
var courses=["Web Development","Digital Marketing"];
var name="Bangsi";
var age= 22;
var level=3;
var email="bansi@gmail.com";
var amountPaid=1000000;
//this creates a new student
var newStudent= new studentManager.createStudent(
    //TODO will add course as array
    studentID, gender, courses, name, age, level, email, amountPaid
);
var hasCompletedFee=feeManager.isFeeCompleted(newStudent.amountPaid);
var totalFee = feeManager.getTotalFee();
console.log(newStudent.name+ "has completed fee ?"+ hasCompletedFee);
console.log(newStudent.name+ " owes " + (totalFee - newStudent.amountPaid));


http.createServer(function(request, response){
    fs.readFile('./index.html', function(err, data){
        if(err){
            console.log(err);
        }
        response.write(data);
        response.end();
    });
    
}).listen("2020", function(err){
    if(err){
        console.log(err)
    }
    
    console.log("http://127.0.0.1:2020");
    
} );