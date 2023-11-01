var n = 4;
var sum = 0;
var x=1;
var temp=0;
var y=0;
for(var i = 1; i<=n;i++){
temp = Math.sin(i,x);
y=temp/(2*i);
sum+=y;
}
WScript.Echo(sum);