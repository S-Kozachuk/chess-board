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
		*/
		if (i%2) {
			if(b%2){
				string+=markOne;
			} else {
				string += markTwo;
			}
			
		}
		else {
			if(b%2){
				string+=markTwo;
			} else {
				string += markOne;
			}
		}
		

	}
	// Вывод результата в консоль
	console.log(string);
	// Вывод результата в объект document (html - страница)
	document.write(string + "<br/>");
	// Обнуление значения переменной после каждой внешней итерации (очистка строки)
	string = '';
	

	// Вывод в консоль комббинированных значений (вложенный + основной циклы)
	//console.log(column + count);
	// console.log('\n');
	// Вывод в объект document c переводом строки
	
}

// console.log(string);
/* 
Как выводить в консоль значки в порядке цифр? 
Установить соответсвие через массив?

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