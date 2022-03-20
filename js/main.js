const output = document.querySelector('.output');
let markOne = "_"; // "чётный" символ
let markTwo = "#"; // "нечётный" символ
let string = ''; // пустая строка

// Creating string (main cycle)
for (let i = 1; i <= 8; i++) {
	// Creating column
	for (let b = 1; b <= 8; b++) {
		// 
		/*
		Проверка числа на нечётность по модулю. Если чётное - вернёт 0 (false), нечётное - 1(true)

		Прямая проверка на чётность: (i%2 == 0) Если при делении на 2 нет остатка т.е. число 
		i чётное, % возвр. 0 (false). Далее полученный 0 сравнивается с 0 по условию.
		Выражение возвращает истину (true). Код в инструкции if выполняется т.е. срабатывает
		первое условие.
		*/
		if (i % 2) {
			if (b % 2){
				string += markOne;
			} else {
				string += markTwo;
			}
			
		}
		else {
			if (b % 2){
				string += markTwo;
			} else {
				string += markOne;
			}
		}
	};
	// Вывод результата в консоль
	//console.log (string);
	// Вывод результата в DOM через метод innerHTML (перезапись значения += в метод innerHTML)
	output.innerHTML += string + '<br/>';
	//newElement.innerHTML = string;
	// Вывод результата в объект document (html - страница)
	//document.write(string + '<br/>');
	string = '';
}

	/*
	let num = 19;
	num = (num%2);
	console.log (num);
	*/
/*
function reverse (num) {
	return (num % 2)
};

console.log(reverse(11));
*/

// Проверка чисел на чётность и не чётность через цикл For
/*
for (let i = 0; i <= 12; i++) {
	if (i % 2 == 0 && i != 0) {
		console.log('Чётное число:' + `${i}`)
	}
	else {
		console.log('Нечётное число:' + `${i}`)
	}
}
*/

/* 
Для тогго что бы чередовать выаод двух раных знаков
после кадой итерации нужно выполнятять проверку числа
на чётность (кратно 2 или нет).
Если число не кратно выводится первый символ, если
кратно выводится 2-ой символ.
*/

// Базовый вариант проверки
/*
if (column%2) {
	console.log(markOne);
}
else {
	console.log(markTwo);
}
*/

// Протестировать различные варианты проверки на чётнось
// https://rebelcode.ru/js/proverka-na-chyotnost-v-javascript/
// https://ru.stackoverflow.com/questions/596170/Как-проверить-число-на-четность
// https://learn.javascript.ru/task/for-even