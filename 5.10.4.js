let user = prompt('Введите Ваше имя');
let yearOfBirth = prompt('Введите год Вашего рождения'); 
let sum = `${user}:${2025-yearOfBirth}`
let sumOne = (2025 - yearOfBirth) % 10;


if(!isNaN(yearOfBirth) == true) {

if(sumOne == 1) { 
   alert(`${sum} год`)
}
if (sumOne == 2) {
    alert(`${sum} года`)
}
if (sumOne == 3) {
    alert(`${sum} года`)
}
if (sumOne == 4) {
    alert(`${sum} года`)
}
if (sumOne > 4) {
    alert(`${sum} лет`)
}
if (sumOne == 0) {
    alert(`${sum} лет`)
}

}

else {
    alert("Год должен быть числом")
}
