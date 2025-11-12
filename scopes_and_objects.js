let globalCount = 0;

function demonstrateLocalScope() {
    let localCount = 5;
    console.log("Inside demonstrateLocalScope:");
    console.log("Local count:", localCount);
    console.log("Global count:", globalCount);
}

function modifyCounts() {
    globalCount += 1;
    let localCount = 10;
    console.log("Inside modifyCounts:");
    console.log("Modified global count:", globalCount);
    console.log("Local count in this function:", localCount);
}

function Student(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
    this.displayInfo = function() {
        console.log(`${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
    };
}

const student1 = new Student("bora", 19, "A");
const student2 = new Student("anita", 22, "B+");
const student3 = new Student("sive", 19, "A-");

console.log("\n--- Student Information ---");
student1.displayInfo();
student2.displayInfo();
student3.displayInfo();

const classroom = {
    name: "Computer Science 101",
    teacher: {
        name: "Dr. Smith",
        subject: "JavaScript Programming",
        officeHours: "Mon & Wed 10AM–12PM"
    },
    students: [student1, student2, student3],
    schedule: {
        days: ["Monday", "Wednesday", "Friday"],
        time: "9:00 AM - 10:30 AM"
    }
};

console.log("\n--- Classroom Object ---");
console.log(classroom);

console.log("\n--- Scope Demonstration ---");
demonstrateLocalScope();
modifyCounts();
console.log("Global count after modification:", globalCount);
