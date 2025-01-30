const arr = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'];
const tictacArray = []; 
let index = 0; 
for (let i = 0; i < 3; i += 1) {
tictacArray[i] = [];
for (let j = 0; j < 3; j += 1) {
tictacArray[i][j] = arr[index];
index += 1;
}}
let str = ""; 
for (let i = 0; i < tictacArray.length; i += 1) {
  for (let j = 0; j < tictacArray[i].length; j += 1) {
    str += `${tictacArray[i][j]} `;
  }
  str += "\n"; 
}
console.log(str);
