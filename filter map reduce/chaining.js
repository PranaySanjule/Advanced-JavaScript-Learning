// Method Chaining

// Syntax:
// map(() => cond1).filter(() => cond2).reduce((acc, item) => cond3);

// Example 1 : Return only names of students who scored more than 60
let students = [
  { name: "Vihant", rollNo: 30, marks: 95 },
  { name: "Raj", rollNo: 25, marks: 80 },
  { name: "Piyush", rollNo: 20, marks: 55 },
  { name: "Rohan", rollNo: 40, marks: 65 },
  { name: "Aryan", rollNo: 35, marks: 45 },
];

const res = students
    .filter((stu) => {
        return stu.marks > 60
    })
    .map((stu) => {
        return stu.name
    });
console.log(res);

// Example 2 : Return total marks for students with marks greater than 60 after 20 marks have been
//             added to those who scored less than 60

const totMarks = students
    .map((stu) => {
        if (stu.marks < 60) {
            stu.marks += 20;
        }
        return stu;
    })
    .filter((stu) => stu.marks > 60)
    .reduce((acc, curr) => acc + curr.marks, 0);
console.log(totMarks);