// 3.1LB
function factor(num)
{
    var res = 1;
    if (num > 0) 
	res = num * factor(num-1);
    return res;
}

var sum = 0;
if(WScript.Arguments.count() == 1)

{
var n = WScript.Arguments(0);
for(i = 1; i <= n; i++){
	var fact = factor(i);
	var pow =  Math.pow(i, i);
	sum += fact / pow;
}

WScript.Echo("Результат  ->  " + sum);
} else {
	WScript.Echo("Неверное кол-во параметров");
}

