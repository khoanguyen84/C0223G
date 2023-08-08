// import sum, * as myMath from "./libs.js";
import sum, { times, subtract } from "./libs.js";
import division from './libs_2.js'
import { numbers } from "./constants.js";

console.log(sum(...numbers));
console.log(times(...numbers));
console.log(subtract(...numbers));
console.log(division(...numbers));