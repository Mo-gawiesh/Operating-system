/* 	������������ ������ � 6-7 �� ������������ ��������
	��. 4310, ������������� �.�.
	
	I) ����������� ���������, ����������� �������� � �������������� ������� ������������������ �������� � �������
	(����������) � ������� ��������� �������� ������ � �������� ��������. ������������ ���� ���� �������� ������ 
	� ��������� � ������� ���������� ��������� ������ ��� ������ ���������. ������������� ����������� �������� 
	����������� ���������� ��������� � ����.
	
	������� 3 - �������������� ���������:
	3.1 ������� �������� �������;
	3.2 � ������� �������� ������� �������� ����;
	3.3 ������������� �������� ������� � �������������� �������;
	3.4 �������� �������� ����� � �������������� ��������;
	3.5 ������� ���������� ��������� � ��������������� ���������;
	3.6 ������� ���������� ����� ��������������� ��������;
*/

var fso = WScript.CreateObject("Scripting.FileSystemObject");
	fso.CreateFolder("source");
	
	fso.CreateTextFile("source\\source_file.txt", true);
var shell = WScript.CreateObject("WScript.Shell")
	shell.Run(('notepad.exe "' + shell.CurrentDirectory + '\\source\\source_file.txt"'), 1, true);
	
	fso.GetFolder("source").Name = "resulting";
	
	fso.GetFile("resulting\\source_file.txt").Attributes = 1;
	
	WScript.Echo("���������� ��������������� ��������\n������ �����:");
	for (var folders = new Enumerator(fso.GetFolder("resulting").SubFolders); !folders.atEnd(); folders.moveNext()) 
		WScript.Echo (folders.item().Name);
	WScript.Echo("������ ������:");
	for (var files = new Enumerator(fso.GetFolder("resulting").Files); !files.atEnd(); files.moveNext()) 
		WScript.Echo (files.item().Name);
	WScript.Echo('\n');
	
	WScript.Echo("���������� ����� ��������������� ��������:");
var sfile = fso.GetFile("resulting\\source_file.txt");
var textStream = sfile.OpenAsTextStream(1);
var txt = textStream.ReadAll();
	WScript.Echo(txt);
	WScript.Echo('\n');

var wfile = fso.CreateTextFile("result.txt", true);
	wfile.Write("��������� ������� ���������. ���������� ����� ��������������� ��������:\n"+txt);
	
	