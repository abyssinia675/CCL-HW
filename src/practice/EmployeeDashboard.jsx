const students = [
  { id: 1, name: "Alex", grade: 92, subject: "Math", isEnrolled: true },
  { id: 2, name: "Jordan", grade: 67, subject: "English", isEnrolled: true },
  { id: 3, name: "Sam", grade: 45, subject: "Math", isEnrolled: false },
  { id: 4, name: "Taylor", grade: 81, subject: "English", isEnrolled: true },
  { id: 5, name: "Morgan", grade: 73, subject: "Math", isEnrolled: true },
  { id: 6, name: "Casey", grade: 55, subject: "English", isEnrolled: false },
];

// 1. Get enrolled students
function getEnrolledStudents(students) {
  return students.filter(student => student.isEnrolled);
}

console.log("Enrolled Students:");
console.log(getEnrolledStudents(students));


// 2. Get passing students
function getPassingStudents(students) {
  return students.filter(student => student.grade >= 60);
}

console.log("Passing Students:");
console.log(getPassingStudents(students));


// 3. Get average grade
function getAverageGrade(students) {
  const total = students.reduce((sum, student) => sum + student.grade, 0);

  return Number((total / students.length).toFixed(2));
}

console.log("Average Grade:");
console.log(getAverageGrade(students));


// 4. Add letter grade
function getLetterGrade(student) {
  let letterGrade;

  if (student.grade >= 90) {
    letterGrade = "A";
  } else if (student.grade >= 80) {
    letterGrade = "B";
  } else if (student.grade >= 70) {
    letterGrade = "C";
  } else if (student.grade >= 60) {
    letterGrade = "D";
  } else {
    letterGrade = "F";
  }

  return {
    ...student,
    letterGrade
  };
}

console.log("Student with Letter Grade:");
console.log(getLetterGrade(students[0]));


// 5. Orchestrator Function
function getClassReport(students) {
  const enrolledStudents = getEnrolledStudents(students);

  const passingStudents = getPassingStudents(enrolledStudents);

  const passingWithLetterGrades =
    passingStudents.map(getLetterGrade);

  return {
    totalEnrolled: enrolledStudents.length,
    passingCount: passingStudents.length,
    averageGrade: getAverageGrade(enrolledStudents),
    passingStudents: passingWithLetterGrades
  };
}

console.log("Class Report:");
console.log(getClassReport(students));


// Export functions
module.exports = {
  getEnrolledStudents,
  getPassingStudents,
  getAverageGrade,
  getLetterGrade,
  getClassReport
};

import React from "react";
import { getClassReport } from "./lib/studentUtils";

const students = [
  { id: 1, name: "Alex", grade: 92, subject: "Math", isEnrolled: true },
  { id: 2, name: "Jordan", grade: 67, subject: "English", isEnrolled: true },
  { id: 3, name: "Sam", grade: 45, subject: "Math", isEnrolled: false },
  { id: 4, name: "Taylor", grade: 81, subject: "English", isEnrolled: true },
  { id: 5, name: "Morgan", grade: 73, subject: "Math", isEnrolled: true },
  { id: 6, name: "Casey", grade: 55, subject: "English", isEnrolled: false },
];

export default function GradeDashboard() {
  const report = getClassReport(students);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Grade Dashboard</h1>

      {/* Summary */}
      <div className="row mb-4">
        <div className="col-md-4">
          <div className="card p-3">
            <h5>Total Enrolled</h5>
            <p className="fs-3">{report.totalEnrolled}</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3">
            <h5>Total Passing</h5>
            <p className="fs-3">{report.passingCount}</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3">
            <h5>Class Average</h5>
            <p className="fs-3">{report.averageGrade}</p>
          </div>
        </div>
      </div>

      {/* Passing Students Table */}
      <div className="card">
        <div className="card-header">
          <h4>Passing Students</h4>
        </div>

        <div className="card-body">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Subject</th>
                <th>Grade</th>
                <th>Letter Grade</th>
              </tr>
            </thead>

            <tbody>
              {report.passingStudents.map((student) => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.subject}</td>
                  <td>{student.grade}</td>
                  <td>
                    <span
                      className={`badge ${
                        student.letterGrade === "A"
                          ? "bg-success"
                          : student.letterGrade === "B"
                          ? "bg-primary"
                          : student.letterGrade === "C"
                          ? "bg-info"
                          : "bg-warning text-dark"
                      }`}
                    >
                      {student.letterGrade}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}