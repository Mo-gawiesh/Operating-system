/* 	Лабораторная работа № 6-7 по операционным системам
	Гр. 4310, Козмодемьянов А.И.
	
	I) Разработать процедуру обработки текстового файла, в соответствии с индивидуальным заданием.
	Организовать ввод исходных данных в процедуру с помощью параметров командной строки при вызове
	процедуры. Создание исходного текста на русском языке в текстовом файле произвести в процедуре
	путем вызова Блокнота. Предусмотреть возможность перенаправления результатов выполнения процедуры в файл.
	
	Вариант 3:
	Задан исходный текст на русском языке. Длина текста - не более NL символов, длина строки - не более NS
	символов, длина слова - не более NW символов. Исходный текст должен оканчиваться точкой. Составить процедуру,
	которая в заданном тексте находит слова, оканчивающиеся заданной буквой. В качестве результата вывести 
	исходный текст, найденные слова и их количество.
*/

// ПЕРЕД ЗАПУСКОМ СКРИПТА ЗАКРЫТЬ NOTEPAD++!

var	NL = 500; // Длина текста (<=)
var NS = 50; // Длина строки (<=)
var NW = 7; // Длина слова (<=)
var LET = WScript.Arguments(0); // Буква, которой оканчивается слово

	// Создание исходного теста путем вызова Блокнота 
var fso = WScript.CreateObject("Scripting.FileSystemObject");
	fso.CreateTextFile("source_file.txt", true);
var shell = WScript.CreateObject("WScript.Shell")
	shell.Run(('notepad++.exe "' + shell.CurrentDirectory + '\\source_file.txt"'), 1, true);
	// Извлечение исходного текста из файла
var sfile = fso.GetFile("source_file.txt");
var textStream = sfile.OpenAsTextStream(1);
var text = textStream.ReadAll();
	
	text = text.replace(/\./g,''); // Удаление точки на конце
	text = text.split(' '); // Разбиваем на слова (по пробелам)
	for (var i = 0; i < text.length; i++) // Проверяем каждое слово на длину:
		if (text[i].length > NW)
			text[i] = text[i].slice(0,NW); // обрезаем слишком длинные слова
	text = text.join(' ').split('\n'); // объединяем всё обратно и делим на строки
	for (i = 0; i < text.length; i++) // проверяем длину каждой строки:
		if (text[i].length > NS)
			text[i] = text[i].slice(0,NS);
	text = text.join('\n');
	if (text.length > NL) // проверяем длину текста:
		text = text.slice(0,NL-1);
	
var wfile = fso.CreateTextFile("result.txt", true); // создаем файл с результатами выполнения скрипта	
		
	WScript.Echo('Исходный текст:\n',text,'.\nСлова, оканчивающиеся на букву ', LET, ': ');
	wfile.Write('Исходный текст:\n'+text+'.\nСлова, оканчивающиеся на букву '+LET+': ');
	text = text.split(' ');
var j = 0 // счетчик
	for (i = 0; i < text.length; i++)
		if (text[i].slice(-1) == LET) {
			WScript.Echo(' '+text[i]);
			wfile.Write(' '+text[i]);
			j++;
		}
	WScript.Echo('Найдено слов: ', j);
	wfile.Write('\nНайдено слов: '+j);