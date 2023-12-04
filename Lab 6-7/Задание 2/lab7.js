/* 	������������ ������ � 6-7 �� ������������ ��������
	��. 4310, ������������� �.�.
	
	I) ����������� ��������� ��������� ���������� �����, � ������������ � �������������� ��������.
	������������ ���� �������� ������ � ��������� � ������� ���������� ��������� ������ ��� ������
	���������. �������� ��������� ������ �� ������� ����� � ��������� ����� ���������� � ���������
	����� ������ ��������. ������������� ����������� ��������������� ����������� ���������� ��������� � ����.
	
	������� 3:
	����� �������� ����� �� ������� �����. ����� ������ - �� ����� NL ��������, ����� ������ - �� ����� NS
	��������, ����� ����� - �� ����� NW ��������. �������� ����� ������ ������������ ������. ��������� ���������,
	������� � �������� ������ ������� �����, �������������� �������� ������. � �������� ���������� ������� 
	�������� �����, ��������� ����� � �� ����������.
*/

// ����� �������� ������� ������� NOTEPAD++!

var	NL = 500; // ����� ������ (<=)
var NS = 50; // ����� ������ (<=)
var NW = 7; // ����� ����� (<=)
var LET = WScript.Arguments(0); // �����, ������� ������������ �����

	// �������� ��������� ����� ����� ������ �������� 
var fso = WScript.CreateObject("Scripting.FileSystemObject");
	fso.CreateTextFile("source_file.txt", true);
var shell = WScript.CreateObject("WScript.Shell")
	shell.Run(('notepad++.exe "' + shell.CurrentDirectory + '\\source_file.txt"'), 1, true);
	// ���������� ��������� ������ �� �����
var sfile = fso.GetFile("source_file.txt");
var textStream = sfile.OpenAsTextStream(1);
var text = textStream.ReadAll();
	
	text = text.replace(/\./g,''); // �������� ����� �� �����
	text = text.split(' '); // ��������� �� ����� (�� ��������)
	for (var i = 0; i < text.length; i++) // ��������� ������ ����� �� �����:
		if (text[i].length > NW)
			text[i] = text[i].slice(0,NW); // �������� ������� ������� �����
	text = text.join(' ').split('\n'); // ���������� �� ������� � ����� �� ������
	for (i = 0; i < text.length; i++) // ��������� ����� ������ ������:
		if (text[i].length > NS)
			text[i] = text[i].slice(0,NS);
	text = text.join('\n');
	if (text.length > NL) // ��������� ����� ������:
		text = text.slice(0,NL-1);
	
var wfile = fso.CreateTextFile("result.txt", true); // ������� ���� � ������������ ���������� �������	
		
	WScript.Echo('�������� �����:\n',text,'.\n�����, �������������� �� ����� ', LET, ': ');
	wfile.Write('�������� �����:\n'+text+'.\n�����, �������������� �� ����� '+LET+': ');
	text = text.split(' ');
var j = 0 // �������
	for (i = 0; i < text.length; i++)
		if (text[i].slice(-1) == LET) {
			WScript.Echo(' '+text[i]);
			wfile.Write(' '+text[i]);
			j++;
		}
	WScript.Echo('������� ����: ', j);
	wfile.Write('\n������� ����: '+j);