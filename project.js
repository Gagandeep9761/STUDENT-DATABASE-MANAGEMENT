const students = [
    {
        id: 1,
        name: "Rahul",
        age: 20,
        course: "B.Tech",
        marks: 85
    },
    {
        id: 2,
        name: "Priya",
        age: 19,
        course: "BCA",
        marks: 92
    },
    {
        id: 3,
        name: "Aman",
        age: 21,
        course: "B.Tech",
        marks: 76
    }
];

// Display all students
const displayStudents = () => {
    console.log("===== STUDENT DATA =====");

    students.forEach(student => {
        const { id, name, age, course, marks } = student;

        console.log(
            `ID: ${id} | Name: ${name} | Age: ${age} | Course: ${course} | Marks: ${marks}`
        );
    });
};

// Find topper
const findTopper = () => {
    const topper = students.reduce((top, student) =>
        student.marks > top.marks ? student : top
    );

    console.log("\n===== TOPPER =====");
    console.log(`Name: ${topper.name}`);
    console.log(`Marks: ${topper.marks}`);
};

// Add a new student using spread operator
const newStudent = {
    id: 4,
    name: "Neha",
    age: 20,
    course: "BCA",
    marks: 88
};

const updatedStudents = [...students, newStudent];

console.log("===== UPDATED STUDENT COUNT =====");
console.log(`Total Students: ${updatedStudents.length}\n`);

displayStudents();
findTopper();
console.log("Student Data Management is running!");