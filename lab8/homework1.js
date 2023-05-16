let student ={
    inputNewGrade(newGrade){
       this.grade.push(newGrade)
    },
    computeAverageGrade(){
        return this.grade.reduce((intial,grad=> initial+grad ), 0)/this.grade.length
    }

}

let student1 = Object.create(student)
student1.firstName = "John"
student1.lastName ="Doe"
student1.grade = [45,55,56,50]

let student2 = Object.create(student)
student2.firstName = "Sayal"
student2.lastName ="Aryal"
student2.grade = [55,56,58,60]

let studentList = [student1,student2]

studentList[0].inputNewGrade(5)
studentList[1].inputNewGrade(10)

console.log(studentList[0].grade)
console.log(studentList[1].grade)

