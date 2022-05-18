const output = document.querySelector('.output'),
	input = document.querySelector('.input'),			
	inputBtn = document.querySelector('.input__btn');
let markOne = "_"; // "чётный" символ
let markTwo = "#"; // "нечётный" символ
let string = ''; // пустая строка


inputBtn.addEventListener('click', () => {
	// Запись в пер. значения, полученноого из поля ввода input
	let inputValue = +input.value;
	// Creating string (main cycle)
	for (let i = 1; i <= inputValue; i++) {
		// Creating row
		for (let b = 1; b <= inputValue; b++) {
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

});