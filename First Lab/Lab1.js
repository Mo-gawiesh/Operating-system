// laba1.js
var n = 10;
var x = 5;
var res = 0;
for (var i = 1; i <= n; i++) {
    var fact1 = 1;
    for (var j = 1; j <= i; j++) {
    fact1 *= j;
    }

    var fact2 = 1;
    for (var j = 1; j <= i * 2; j++) {
    fact2 *= j;
    }
    var power = x;
    for (var j = 1; j < i; j++) {
        power *= x;
    }
    res += ((fact1 * fact1) / (fact2)) * power;
    
}
WScript.Echo(res);
