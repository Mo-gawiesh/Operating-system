if(WScript.Arguments.count() == 3){
var fromDir = WScript.Arguments(0);
var filename = WScript.Arguments(1);
var toDir = WScript.Arguments(2);
var shell = WScript.CreateObject("WScript.Shell");
var FileSysObj = WScript.CreateObject("Scripting.FileSystemObject");
if(FileSysObj.FolderExists(fromDir) == false){
FileSysObj.CreateFolder(fromDir);
}
if(FileSysObj.FolderExists(toDir) == false){
FileSysObj.CreateFolder(toDir);
}
shell.Run(shell.ExpandEnvironmentStrings("%WINDIR%\\notepad.exe "  + fromDir + filename),1,true);
FileSysObj.CopyFile(fromDir + filename, toDir, true);
}
