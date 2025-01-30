let user = prompt('Введите Ваше имя');
let yearOfBirth = prompt('Введите год Вашего рождения'); 
let sum = `${user}:${2025-yearOfBirth}`

if(!isNaN(yearOfBirth) == true) { alert(sum)
}
else {
    alert('Год должен быть числом')
}

