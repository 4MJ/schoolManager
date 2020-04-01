exports.createStudent=class Student{
    constructor(studentID, gender, courses, name, age, level, email, amountPaid){
        this.studentID=studentID;
        this.gender=gender;
        this.courses=courses;
        this.name=name;
        this.age=age;
        this.level=level;
        this.email=email;
        this.amountPaid=amountPaid;
    }
}