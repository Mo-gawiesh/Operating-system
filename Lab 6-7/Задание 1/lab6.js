/* 	Лабораторная работа № 6-7 по операционным системам
	Гр. 4310, Козмодемьянов А.И.
	
	I) Разработать процедуру, выполняющую заданную в индивидуальном задании последовательность операций с папками
	(каталогами) с помощью различных объектов работы с файловой системой. Организовать ввод всех исходных данных 
	в процедуру с помощью параметров командной строки при вызове процедуры. Предусмотреть возможность передачи 
	результатов выполнения процедуры в файл.
	
	Вариант 3 - Переименование каталогов:
	3.1 Создать исходный каталог;
	3.2 С помощью Блокнота создать исходный файл;
	3.3 Переименовать исходный каталог в результирующий каталог;
	3.4 Изменить атрибуты файла в результирующем каталоге;
	3.5 Вывести оглавление исходного и результирующего каталогов;
	3.6 Вывести содержимое файла результирующего каталога;
*/

var fso = WScript.CreateObject("Scripting.FileSystemObject");
	fso.CreateFolder("source");
	
	fso.CreateTextFile("source\\source_file.txt", true);
var shell = WScript.CreateObject("WScript.Shell")
	shell.Run(('notepad.exe "' + shell.CurrentDirectory + '\\source\\source_file.txt"'), 1, true);
	
	fso.GetFolder("source").Name = "resulting";
	
	fso.GetFile("resulting\\source_file.txt").Attributes = 1;
	
	WScript.Echo("Оглавление результирующего каталога\nСписок папок:");
	for (var folders = new Enumerator(fso.GetFolder("resulting").SubFolders); !folders.atEnd(); folders.moveNext()) 
		WScript.Echo (folders.item().Name);
	WScript.Echo("Список файлов:");
	for (var files = new Enumerator(fso.GetFolder("resulting").Files); !files.atEnd(); files.moveNext()) 
		WScript.Echo (files.item().Name);
	WScript.Echo('\n');
	
	WScript.Echo("Содержимое файла результирующего каталога:");
var sfile = fso.GetFile("resulting\\source_file.txt");
var textStream = sfile.OpenAsTextStream(1);
var txt = textStream.ReadAll();
	WScript.Echo(txt);
	WScript.Echo('\n');

var wfile = fso.CreateTextFile("result.txt", true);
	wfile.Write("Процедура успешно завершена. Содержимое файла результирующего каталога:\n"+txt);
	
	