var str = "Иногда хватает мгновения чтобы забыть жизнь, а иногда не хватает жизни чтобы забыть мгновение."; 
var len = parseInt(WScript.Arguments(0));
WScript.Echo ('Ищем слова длиной ' + len + ' символов');
WScript.Echo('\nИсходный текст: "' + str + '"');

str = str.replace(/\./g,''); // Удаление точки на конце
str = str.replace(/\,/g,''); // Удаление запятые на конце

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
WScript.Echo('Найдено '+strResult.count+' слов(а), содержащих '+len+' символов');
WScript.Echo('Слова: ' + strResult.words +'\n');