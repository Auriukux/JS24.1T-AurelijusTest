const studentai = [
    { vardas: "Martynas", pažymys: "11" },
    { vardas: "Mantas", pažymys: "4" },
    { vardas: "Kornelijus", pažymys: "8" },
    { vardas: "Gytis", pažymys: "10" },
    { vardas: "Deividas", pažymys: "9" },
    { vardas: "Aurelijus", pažymys: "6" },
    { vardas: "Nematomas žmogus", pažymys: "2" },
];

function gautiStudentus() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(studentai);
        }, 2000);
    });
}

async function rodytiStudentus() {
    const studentųSąrašas = document.getElementById('studentList');
    studentųSąrašas.innerHTML = '';

    const loadButton = document.getElementById('loadStudents');
    loadButton.disabled = true;

    const studentųDuomenys = await gautiStudentus();

    if (studentųDuomenys.length === 0) {
        studentųSąrašas.textContent = "Nėra studentų duomenų!";
    } else {
        studentųDuomenys.forEach(studentas => {
            const studentoDiv = document.createElement('div');
            studentoDiv.textContent = `${studentas.vardas} - pažymys: ${studentas.pažymys}`;

            const grade = parseInt(studentas.pažymys);
            if (grade === 11) {
                studentoDiv.textContent += ` - Dievo anūkas?`;
            } else if (grade === 10) {
                studentoDiv.textContent += ` - Einšteino anūkas?`;
            } else if (grade <= 2) {
                studentoDiv.textContent += ` - Ar tau reikia pagalbos su namų darbais?`;
            }

            studentųSąrašas.appendChild(studentoDiv);
        });

        const šmaikštusPranešimai = [
            "Štai jie! Geriau už gauti '10' tik gauti '11' 😎",
            "Ar tu tikras, kad nori pamatyti šiuos pažymius? 🤔",
            "Čia tavo studentai. Nors ir ne visi jie bus ateities mokslininkai..."
        ];
        alert(šmaikštusPranešimai[Math.floor(Math.random() * šmaikštusPranešimai.length)]);
    }

    loadButton.disabled = false;
}


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('loadStudents').addEventListener('click', rodytiStudentus);
});