class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
]

// 06. make an array of enrolled students
{// filter 를 통해 원하는 학생만 뽑아올 수 있다.
    const result = students.filter((students) => students.enrolled)
    console.log(result);
}
// 보고 싶으면 아랫쪽.. console.clear(); 지워야한다.


// 07. make an array containing only the student's scores;
{// map을 통해 점수만 나열할 수 있다.
    const result1 = students.map((students) => students.score);
    console.log(result1);
}

// 08. check if there is a student with the score lower than 50;
{
    console.clear(); // 이걸 통해 윗쪽 console.log 를 지울 수 있다.
    const result2 = students.some((students) => students.score < 50);
    console.log(result2);
    // 조건에 맞는 사람이 있을 경우 true, false 를 반환
    // 전부 맞는 경우를 알고 싶을 때 every를 사용한다.
}

// 09 compute student's average score
{// 어렵다..
    console.clear();
    const result3 = students.reduce((prev, curr) => {
        return prev + curr.score;
    }, 0);
    // reduce를 통해 누적된 값을 전달한다.
    // 0부터 시작하라고 강제로 설정함
    console.log(result3 / students.length);
}

// 10. make a string containing all the scores
{
    console.clear();
    const result4 = students.map((students) => students.score)
        .filter(score => score >= 50)
        // filter를 통해 50점 미만의 친구들을 제외하고 볼 수 있다.
        .join();
    console.log(result4);
    // join을 통해 숫자를 문자열로 변경할 수 있다.
}

// Bonus sorted in ascending order
{
    console.clear();
    const result5 = students.map((students) => students.score)
        .sort((a, b) => a - b) // sort를 통해 정렬할 수 있다.
        // 큰 점수가 앞에 나오게 하려면 b-a 를 하면 된다.
        .join(); // sort 된 아이들을 문자열로 변환
    console.log(result5);
}