class Student {

    constructor(id) {
        this.studentId = id;
        this.answers = [];
    }

    addAnswer(ans) {
        this.answers.push(ans);
    }

}

class Question {
    constructor(qid, ans) {
        this.qid = qid;
        this.answer = ans;
    }

    checkAnswer(ans) {

        return this.answer === ans;
    }

}

class Quiz {

    constructor(questions, students) {
        this.questions = questions;
        this.students = students;
    }

    scoreStudentBySid(id) {

        let student = this.students.find(student => student.studentId === id)

        let score = student.answers.reduce((initial, ans) => {
            const que = this.questions.find(q => q.qid === ans.qid);
            if (que && que.checkAnswer(ans.answer)) {
                initial += 1;
            }
            return initial;
        }, 0)

        return score;

    }

    getAverageScore() {

        const totalScore = this.students.reduce(
            (acc, student) => acc + this.scoreStudentBySid(student.studentId),0

        ); 
        return totalScore/students.length;
        // return (scoreforStudent10 + scoreforStudent11) / students.length;
    }
}
const student1 = new Student(10);
student1.addAnswer(new Question(2, 'a'));
student1.addAnswer(new Question(3, 'b'));
student1.addAnswer(new Question(1, 'b'));

const student2 = new Student(11);
student2.addAnswer(new Question(3, 'b'));
student2.addAnswer(new Question(2, 'a'));
student2.addAnswer(new Question(1, 'd'));

const students = [student1, student2];

const questions = [new Question(1, 'b'), new Question(2, 'a'), new
    Question(3, 'b')];

const quiz = new Quiz(questions, students);
let scoreforStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreforStudent10); //Expected Result: 3
let scoreforStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreforStudent11); //Expected Result: 2
let average = quiz.getAverageScore();
console.log(average); //Expected Reuslt: 2.5


