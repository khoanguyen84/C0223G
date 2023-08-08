// export -> export và export default (chỉ được 1 lần trong 1 file, ko bắt buộc)
// import

function sum(...rest) {
    let total = 0;
    for (let i = 0; i < rest.length; i++) {
        total += rest[i];
    }
    return total;
}

function times(...rest) {
    let total = 1;
    for (let i = 0; i < rest.length; i++) {
        total *= rest[i];
    }
    return total;
}

function subtract(...rest) {
    let total = 0;
    for (let i = 0; i < rest.length; i++) {
        total -= rest[i];
    }
    return total;
}
export { times, subtract }
export default sum;