function convertScoreToGrade(score) {
    if (score > 100 || score < 0) {
        return 'INVALID SCORE';
    }

    if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else if (score >= 0) {
        return 'F';
    }
}