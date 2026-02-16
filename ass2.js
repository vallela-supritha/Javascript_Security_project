let students = [
  { id: 1, name: "A", mobileno: 8978735498, address: "ABC", age: 20 },
  { id: 2, name: "B", mobileno: 7873547890, address: "BCD", age: 25 }
];

function addStudent(student) {
  students.push(student);
}

function getStudents() {
  return students;
}

function updateStudent(id, updatedData) {
  let newStudents = [];

  for (let i = 0; i < students.length; i++) {
    let s = students[i];

    if (s.id === id) {
      let updatedStudent = {
        id: s.id,
        name: s.name,
        mobileno: s.mobileno,
        address: s.address,
        age: s.age
      };
      newStudents.push(updatedStudent);
    } else {
      newStudents.push(s);
    }
  }

  students = newStudents;
}



function deleteStudent(id) {
  students = students.filter(s => s.id !== id);
}


console.log("Initial:", getStudents());

addStudent({ id: 3, name: "C", mobileno: 9998887777, address: "CDE", age: 22 });
console.log("After adding new student\n",getStudents())

updateStudent(2, { age: 26, address: "XYZ" });
console.log("After updating\n",getStudents())

deleteStudent(1);
console.log("after deletion",getStudents())

