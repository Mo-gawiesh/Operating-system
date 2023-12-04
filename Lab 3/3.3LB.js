//3.3LB. "Иногда  хватает  мгновения  чтобы  забыть жизнь, а  иногда  не  хватает  жизни  чтобы  забыть  мгновение."

if(WScript.Arguments.count() == 1){
var text = WScript.Arguments(0);
var NL = text.length;
var index = text.search(/\s{2,}/);
while(index != -1){
	text = text.replace(/\s{2,}/, " ");
	index = text.search(/\s{2,}/);
}
WScript.Echo(text);
}
WScript.Echo(WScript.Arguments(0));