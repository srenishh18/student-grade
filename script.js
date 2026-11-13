
let subjects = document.getElementById("subjects");

for (let i = 1; i <= 5; i++) {

    subjects.innerHTML += `
        <h3>Subject ${i}</h3>

        <div class="subject-row">
            <label>Marks:</label>
            <input type="number" id="mark${i}" min="0" max="100" required>

            <label>Credits:</label>
            <input type="number" id="credit${i}" min="1" required>
        </div>
    `;
}
// Calculate grade
document.getElementById("gradeForm").addEventListener("submit",
function(e) {

    e.preventDefault();

    let total = 0;
    let totalCredits = 0;
    let weightedPoints = 0;
    let valid = true;

    for (let i = 1; i <= 5; i++) {

        let marks = Number(document.getElementById("mark" + i).value);
        let credits = Number(document.getElementById("credit" + i).value);

        if (marks < 0 || marks > 100 || credits <= 0) {
            valid = false;
            break;
        }

        total += marks;
        totalCredits += credits;

        let gradePoint;

        if (marks >= 90)
            gradePoint = 10;
        else if (marks >= 80)
            gradePoint = 9;
        else if (marks >= 70)
            gradePoint = 8;
        else if (marks >= 60)
            gradePoint = 7;
        else if (marks >= 50)
            gradePoint = 6;
        else if (marks >= 40)
            gradePoint = 5;
        else
            gradePoint = 0;

        weightedPoints += gradePoint * credits;
    }

    if (!valid || totalCredits == 0) {
        document.getElementById("result").innerHTML =
            "Enter valid marks and credits";
        return;
    }

    let average = total / 5;
    let gpa = weightedPoints / totalCredits;

    let grade;

    if (average >= 90)
        grade = "O";
    else if (average >= 80)
        grade = "A+";
    else if (average >= 70)
        grade = "A";
    else if (average >= 60)
        grade = "B+";
    else if (average >= 50)
        grade = "B";
    else if (average >= 40)
        grade = "C";
    else
        grade = "Fail";

    document.getElementById("result").innerHTML = `
        <h3>Total Marks: ${total}</h3>
        <h3>Average: ${average.toFixed(2)}</h3>
        <h3>Grade: ${grade}</h3>
        <h3>Credit Points (GPA): ${gpa.toFixed(2)}</h3>
    `;

});
