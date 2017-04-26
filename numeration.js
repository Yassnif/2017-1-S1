var base2_to_base10 = function(nombre) {
    var idx;
    var result = 0;
    for(idx = 0; idx < nombre.length; idx++) {
        result += Number(nombre[idx]) * Math.pow(2, nombre.length - 1 - idx);
    }

    return result;
};

var base10_to_base2 = function(nombre) {
    var result = "";
    do {
        result = (nombre % 2) + result;
        nombre = Math.floor(nombre / 2);
    } while(nombre >= 1);
    
    return result;
};

var number = function(n) {
    var code = n.charCodeAt(0);
    if ("0".charCodeAt(0) <= code && code <= "9".charCodeAt(0)) {
        return code - "0".charCodeAt(0);
    } else if ("a".charCodeAt(0) <= code && code <= "z".charCodeAt(0)) {
        return code - ("a".charCodeAt(0) - 10);
    } else if ("A".charCodeAt(0) <= code && code <= "Z".charCodeAt(0)) {
        return code - ("A".charCodeAt(0) - 10);
    }
};

var base16_to_base10 = function(nombre) {
    var idx;
    var result = 0;
    for(idx = 0; idx < nombre.length; idx++) {
        result += number(nombre[idx]) * Math.pow(16, nombre.length - 1 - idx);
    }

    return result;
};

var base10_to_base16 = function(nombre) {
    
};

console.log(base2_to_base10("0"));            // 0
console.log(base2_to_base10("1000"));         // 8
console.log(base2_to_base10("1111"));         // 15
console.log(base2_to_base10("1010"));         // 10
console.log(base2_to_base10("111110000101")); // 3973

console.log(base10_to_base2(0));    // "0"
console.log(base10_to_base2(1));    // "1"
console.log(base10_to_base2(10));   // "1010"
console.log(base10_to_base2(23));   // "10111"
console.log(base10_to_base2(52));   // "110100"
console.log(base10_to_base2(1000)); // "1111101000"

console.log(base16_to_base10("0"));   // 0
console.log(base16_to_base10("3"));   // 3
console.log(base16_to_base10("A1"));  // 161
console.log(base16_to_base10("100")); // 256
console.log(base16_to_base10("abc")); // 2748
