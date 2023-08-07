let jobs = ["java", "rect", "angular"];

// let job_1 = jobs[0]
// let job_2 = jobs[1]
// let job_3 = jobs[2]

let [job_1, , job_3] = jobs

console.log(job_1, job_3);

let nhat = {
    name: "Nhật",
    age: 18,
    email: "nhat@gmail.com"
}

// let { email, age, name } = nhat;

// console.log(name);

let std_2 = {
    name: "Nguyên",
    email: 'nguyen@gmail.com',
    language: {
        name: "English",
        level: "B1"
    }
}

let { email, language } = std_2

console.log(language);