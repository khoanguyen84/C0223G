// export -> export và export default (chỉ được 1 lần trong 1 file, ko bắt buộc)
// import

function division(...rest) {
    let total = 1;
    for (let i = 0; i < rest.length; i++) {
        total /= rest[i];
    }
    return total;
}

export default division;