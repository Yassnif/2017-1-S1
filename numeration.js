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
    if (n === "0") return 0;
    if (n === "1") return 1;
    if (n === "2") return 2;
    if (n === "3") return 3;
    if (n === "4") return 4;
    if (n === "5") return 5;
    if (n === "6") return 6;
    if (n === "7") return 7;
    if (n === "8") return 8;
    if (n === "9") return 9;
    if (n === "a" || n === "A") return 10;
    if (n === "b" || n === "B") return 11;
    if (n === "c" || n === "C") return 12;
    if (n === "d" || n === "D") return 13;
    if (n === "e" || n === "E") return 14;
    if (n === "f" || n === "F") return 15;
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
