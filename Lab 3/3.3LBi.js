var str = "������ ������� ��������� ����� ������ �����, � ������ �� ������� ����� ����� ������ ���������."; 
var len = parseInt(WScript.Arguments(0));
WScript.Echo ('���� ����� ������ ' + len + ' ��������');
WScript.Echo('\n�������� �����: "' + str + '"');

str = str.replace(/\./g,''); // �������� ����� �� �����
str = str.replace(/\,/g,''); // �������� ������� �� �����

    function getWords (str, len) {
      
      var arr = str.split(' '),
          i,
          result = {
            count: 0,
            words: []
          };         
      for (i = 0; i < arr.length; i += 1) {     
        if (arr[i].length == len) {         
            result.count += 1;
            result.words.push(arr[i]);          
        }      
      }      
      return result;    
    } 

    var strResult = getWords(str, len); 
WScript.Echo('������� '+strResult.count+' ����(�), ���������� '+len+' ��������');
WScript.Echo('�����: ' + strResult.words +'\n');