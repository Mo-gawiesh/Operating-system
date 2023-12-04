if(WScript.Arguments.count() == 3){ //команда, адрес и имя файла
      var command = WScript.Arguments(0);
      var path = WScript.Arguments(1);
      var filename = WScript.Arguments(2);
      var shell = WScript.CreateObject("WScript.Shell");
      var strCommand = "%COMSPEC% /C help " + command + '>' + path +
filename;
      WScript.Echo(strCommand); // для отладки
      shell.Run(strCommand);
} else if(WScript.Arguments.count() == 1){ //(только команда)
      var command = WScript.Arguments(0);
      var shell = WScript.CreateObject("WScript.Shell");
      shell.Run("%COMSPEC% /K help " + command);
} else { //только lab5.1.js)
      var shell = WScript.CreateObject("WScript.Shell");
      shell.Run("%COMSPEC% /K help ");
}