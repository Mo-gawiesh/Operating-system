// 3.2LB
if(WScript.Arguments.Count() == 2){
var n = WScript.Arguments(0);
var x = WScript.Arguments(1);
var sum = 0;

for(i = 1; i <= n; i++){
	sum += Math.sin(i * x) / Math.pow(i,i);
} 

WScript.Echo("Результат -> " + sum);
}
