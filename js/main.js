function newMonth() {
  let nmоnth = prompt('Введите номер месяца'); 
let seasоns = ['Зима', 'Весна', 'Лето', 'Осень'];

if (nmоnth >= 1 && nmоnth <= 12) alert('Время года: ' + seasоns[Math.floor(nmоnth % 12 / 3)]);
else alert('Неправильный номер месяца');
}

function secondGame() {
  let game2Arr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
game2Arr = game2Arr.sort(() => Math.random() - 0.5);
alert(game2Arr);
let answ1 = prompt('Какое слово было первым?')
let answ2 = prompt('Какое слово было последним?')
if (answ1.toLowerCase() === game2Arr[0].toLowerCase() && answ2.toLowerCase() === game2Arr[6].toLowerCase()) {
  alert('Поздравляю. Оба варианта верны')
}else if (answ1.toLowerCase() === game2Arr[0].toLowerCase() || answ2.toLowerCase() === game2Arr[6].toLowerCase()) {
  alert('Вы были близки к победе!')
}else {
  alert('Ответ не верный. Попробуйте снова')
}
}
