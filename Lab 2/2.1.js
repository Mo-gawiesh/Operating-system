function factorial(n)
{
if(n!=1) return n*factorial(n-1);
else return 1;
}
var n=3;
var sum=0;
var x=1;
for(var i= 1; i<= n; i++){
var temp = 1;
temp = factorial(i);
x=Math.pow(i,i);
sum += temp/x;
}
WScript.Echo(sum);