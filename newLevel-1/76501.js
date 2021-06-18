function solution(absolutes, signs) {
    let result = 0;

    absolutes.forEach((absolete, index) => {
        const sign = signs[index];

        result += !sign ? -1 * absolute : + absolute;
    })

    return result;
}