function highOrDown(score) {
    let oneNum = score % 10;
    if (oneNum < 3) {
        return '-';
    } else if (oneNum >= 8) {
        return '+';
    } else {
        return '';
    }
}

function convertScoreToGradeWithPlusAndMinus(score) {
    // TODO: 여기에 코드를 작성합니다.
    let grade;
    if (score > 100 || score < 0) {
        return 'INVALID SCORE';
    }
    if (score === 100) {
        return 'A+';
    }
    if (score >= 90) {
        grade = 'A';
    } else if (score >= 80) {
        grade = 'B';
    } else if (score >= 70) {
        grade = 'C';
    } else if (score >= 60) {
        grade = 'D';
    } else if (score >= 0) {
        grade = 'F';
    }
    if (grade !== 'F') {
        grade = grade + highOrDown(score);
    }
    return grade;
}
