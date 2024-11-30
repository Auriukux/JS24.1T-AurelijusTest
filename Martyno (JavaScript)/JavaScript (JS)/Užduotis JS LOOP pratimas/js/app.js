function processStudents(students) {
    let uniqueNames = new Set();
    let output = [];

    for (let i = 0; i < students.length; i++) {
        let name = students[i].toLowerCase();

        if (name.length < 3 || name === "" || /[^a-z]/i.test(name)) {
            continue;
        }

        if (uniqueNames.has(name)) {
            continue;
        }

        uniqueNames.add(name);
        output.push(students[i]);

        if (name === "john") {
            console.log("Student John found, stopping search.");
            break;
        }
    }

    for (let name of output) {
        console.log(name);
    }
}

let students = ["Alice", "bob", "1234", "eve", "", "ALICE", "Bob", "Eve!", "John", "Charlie", "eve", "JoHn"];
processStudents(students);