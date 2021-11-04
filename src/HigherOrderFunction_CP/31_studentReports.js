function studentReports(students) {
    // TODO: 여기에 코드를 작성합니다.
    students = students.filter(student => {
        return student.gender === 'female';
    });

    students = students.map(student => {
        let sum = student.grades.reduce((acc, cur)=> {
            acc += cur;
            return acc;
        }, 0);
        let avg = sum / student.grades.length;
        student.grades = avg; //sum / student.grades.length;
        return student;
    })
    return students;
}
