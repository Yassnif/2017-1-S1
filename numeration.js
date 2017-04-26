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

var number_to_string = function(n) {
    if (n <= 9) {
        return String.fromCharCode(n + "0".charCodeAt(0));
    } else {
        return String.fromCharCode(n - 10 + "A".charCodeAt(0));
    }
};

var base10_to_base16 = function(nombre) {
    var result = "";
    do {
        result = number_to_string(nombre % 16) + result;
        nombre = Math.floor(nombre / 16);
    } while(nombre >= 1);
    
    return result;
};

// var from_base10 = function(number, base) {
//     var result = "";
//     do {
//         result = number_to_string(number % 16) + result;
//         number = Math.floor(number / 16);
//     } while(number >= 1);
    
//     return result;
// };

// var to_base10 = function(number, base) {
//     var idx;
//     var result = 0;
//     for(idx = 0; idx < number.length; idx++) {
//         result += number(number[idx]) * Math.pow(16, number.length - 1 - idx);
//     }

//     return result;
// };

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

console.log(base10_to_base16(0));    // "0"
console.log(base10_to_base16(1));    // "1"
console.log(base10_to_base16(10));   // "A"
console.log(base10_to_base16(23));   // "17"
console.log(base10_to_base16(52));   // "34"
console.log(base10_to_base16(1000)); // "3E8"

// console.log(from_base10(0, 16));    // "0"
// console.log(from_base10(1, 16));    // "1"
// console.log(from_base10(10, 16));   // "A"
// console.log(from_base10(23, 16));   // "17"
// console.log(from_base10(52, 16));   // "34"
// console.log(from_base10(1000, 16)); // "3E8"
// console.log(from_base10(1000, 8));  // "1750"
// console.log(from_base10(1000, 2));  // "1111101000"
// console.log(from_base10(1000, 3));  // ""
// console.log(from_base10(1000, 10)); // "1000"