function makePermutations(str) {
    let result = '';
    for (let left = 0; left < str.length; left++) {
        for (let right = 0; right < str.length; right++) {
            result = result + `${str[left]}${str[right]},`;
        }
    }

    return result.slice(0, result.length - 1);
}