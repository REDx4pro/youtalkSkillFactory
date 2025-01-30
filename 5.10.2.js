const promocode = prompt('Введите промокод');


if (promocode.toLowerCase().includes("Скидка".toLowerCase())) { 
    alert('Промокод применён')
}
else {
    alert('Промокод не работает')
}
