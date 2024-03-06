"use strict";
// Task for Grading on basises of marks or precent % 
let marks = 90;
let grade;
if (marks >= 90 && marks <= 100) {
    grade = 'A*';
}
else if (marks >= 80 && marks <= 89) {
    grade = 'A';
}
else if (marks >= 70 && marks <= 69) {
    grade = 'B';
}
else if (marks >= 60 && marks <= 59) {
    grade = 'C';
}
else if (marks >= 50 && marks <= 49) {
    grade = 'D';
}
else if (marks >= 40 && marks <= 39) {
    grade = 'E';
}
;
console.log("According to grade", grade);
