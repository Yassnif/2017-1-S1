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

var string_to_number = function(n) {
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
        result += string_to_number(nombre[idx]) * Math.pow(16, nombre.length - 1 - idx);
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

var from_base10 = function(number, base) {
    var result = "";
    do {
        result = number_to_string(number % base) + result;
        number = Math.floor(number / base);
    } while(number >= 1);
    
    return result;
};

var to_base10 = function(number, base) {
    var idx;
    var result = 0;
    for(idx = 0; idx < number.length; idx++) {
        result += string_to_number(number[idx]) * Math.pow(base, number.length - 1 - idx);
    }

    return result;
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

console.log(base10_to_base16(0));    // "0"
console.log(base10_to_base16(1));    // "1"
console.log(base10_to_base16(10));   // "A"
console.log(base10_to_base16(23));   // "17"
console.log(base10_to_base16(52));   // "34"
console.log(base10_to_base16(1000)); // "3E8"

console.log(from_base10(0, 16));    // "0"
console.log(from_base10(1, 16));    // "1"
console.log(from_base10(10, 16));   // "A"
console.log(from_base10(23, 16));   // "17"
console.log(from_base10(52, 16));   // "34"
console.log(from_base10(1000, 16)); // "3E8"
console.log(from_base10(1000, 8));  // "1750"
console.log(from_base10(1000, 2));  // "1111101000"
console.log(from_base10(1000, 3));  // ""
console.log(from_base10(1000, 10)); // "1000"

console.log(to_base10("0", 16));         // 0
console.log(to_base10("1", 16));         // 1
console.log(to_base10("A", 16));         // 10
console.log(to_base10("17", 16));        // 23
console.log(to_base10("34", 16));        // 52
console.log(to_base10("3E8", 16));       // 1000
console.log(to_base10("1750", 8));       // 1000
console.log(to_base10("1111101000", 2)); // 1000
console.log(to_base10("1101001", 3));    // 1000
console.log(to_base10("1000", 10));      // 1000

var abs = function(number) {
    if (number >= 0) {
        return number;
    } else {
        return -number;
    }
};

var prepend = function(str, char, length) {
    var idx;
    var toAdd = length - str.length;

    for(idx = 0; idx < toAdd; idx++) {
        str = char + str;
    }

    return str;
};

var signed_base10_to_base2 = function(number, digits) {
    var idx;
    var complement = "";
    var length;

    if(number < 0) {
        number = abs(number);
        number = base10_to_base2(number);
        number = prepend(number, "0", digits - 1);

        for(idx = 0; idx < number.length; idx++) {
            if(number[idx] === "0") {
                complement = complement + "1";
            } else {
                complement = complement + "0";
            }
        }

        complement = base2_to_base10(complement);
        complement = complement + 1;
        complement = base10_to_base2(complement);

        complement = prepend(complement, "0", digits - 1);

        return "1" + complement;
    } else {
        number = base10_to_base2(number);
        number = prepend(number, "0", digits);

        return number;
    }
};

console.log(signed_base10_to_base2(0, 3));   // 000
console.log(signed_base10_to_base2(1, 3));   // 001
console.log(signed_base10_to_base2(-1, 5));  // 11111
console.log(signed_base10_to_base2(-18, 6)); // 101110
console.log(signed_base10_to_base2(-2, 8));  // 11111110
