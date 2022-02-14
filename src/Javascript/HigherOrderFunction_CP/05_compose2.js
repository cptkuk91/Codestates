function pipe(...funcs) {
    return function (num) {
        let result = num;
        for (let i = 0; i < funcs.length; i++) {
            result = funcs[i](result);
        }
        return result;
    };
}