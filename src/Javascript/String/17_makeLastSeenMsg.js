function makeLastSeenMsg(name, period) {
    // TODO: 여기에 코드를 작성합니다.
    const day = 60 * 24;
    const hour = 60;
    if (period >= day) {
        return `${name}: ${Math.floor(period / day)}일 전에 접속함`;
    } else if (period >= hour) {
        return `${name}: ${Math.floor(period / hour)}시간 전에 접속함`;
    } else {
        return `${name}: ${period}분 전에 접속함`;
    }
}