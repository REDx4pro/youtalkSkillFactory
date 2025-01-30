
let age = prompt('Введите Ваш возраст');
if (isNaN(age) || age.trim() === "" || age < 0) {
    alert("Ошибка! Введите корректный возраст."); }

age = Number(age);
let maxCredit = 0;

  if (age < 18) {
        alert("Кредит Вам не доступен.");
    
    } else if (age >= 18 && age <= 21) {
        maxCredit = 50000;
    } else if (age >= 22 && age <= 35) {
        maxCredit = 400000;
    } else if (age >= 36 && age <= 65) {
        maxCredit = 1000000;
    } else {
        alert("Возраст превышает допустимый для получения кредита.");
    }

    let credit = prompt(`Введите сумму кредита (максимум ${maxCredit}, кратно 1000):`); 
     
    if (isNaN(credit) || credit.trim() === "" || credit <= 0 || credit % 1000 !== 0) {
        alert("Ошибка! Введите корректную сумму, кратную 1000.");
    } 

    credit = Number(credit);
    
    if (credit > maxCredit) {
        alert(`Ошибка! Максимально доступная сумма кредита для вашего возраста: ${maxCredit}.`);
    } else  {
alert(`Вам одобрен кредит на сумму: ${credit}.`) }
