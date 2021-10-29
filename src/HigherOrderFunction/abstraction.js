const data = [
    {
        gender: 'male',
        age: 24,
    },
    {
        gender: 'male',
        age: 25,
    },
    {
        gender: 'female',
        age: 27,
    },
    {
        gender: 'female',
        age: 22,
    },
    {
        gender: 'male',
        age: 29,
    },
];

// 남자만 있는 배열을 만들어보자
function getAverageOfMaleAtOnce(data) {
    const onlyMales = data.filter(function (el) {
        return el.gender === 'male';
    });

    const numOfMales = onlyMales.length;

    const onlyMaleAges = onlyMales.map(function (el) {
        return el.age;
    }); // 오직 남라고 구성된 배열에서 나이를 배열로 리턴할 수 있다.

    const sumOfAges = onlyMales.reduce(function(acc, cur){
       acc += cur
        return acc;
    }, 0); // 오직 남자들의 나이만을 더했을 때

    return sumOfAges / numOfMales;
    // 남자들의 평균 나이
}

