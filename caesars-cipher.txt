// function rot13(str, shift) {
//     var result = "";

//     for (var i = 0; i < str.length; i++) {
//         var c = str.charCodeAt(i);

//         // Check if it's a letter
//         if (c >= 65 && c <= 90) { // Uppercase letters
//             result += String.fromCharCode((c - 65 - shift + 26) % 26 + 65);
//         } else if (c >= 97 && c <= 122) { // Lowercase letters
//             result += String.fromCharCode((c - 97 - shift + 26) % 26 + 97);
//         } else { // Other characters remain unchanged
//             result += str.charAt(i);
//         }
//     }
//     return result;
// }

// // Example usage:
// var encoded = "SERR PBQR PNZC";
// var shift = 13;
// console.log(rot13(encoded, shift)); // Outputs: "Ohwhy Identical"
function rot13(str) {
    return str.replace(/[A-Za-z]/g, function(char) {
        // Get the character code of the letter
        var charCode = char.charCodeAt(0);

        // Uppercase letters
        if (charCode >= 65 && charCode <= 90) {
            return String.fromCharCode(((charCode - 65 + 13) % 26) + 65);
        }
        // Lowercase letters
        else if (charCode >= 97 && charCode <= 122) {
            return String.fromCharCode(((charCode - 97 + 13) % 26) + 97);
        }
    });
}

// Test cases
console.log(rot13("SERR PBQR PNZC")); // FREE CODE CAMP
console.log(rot13("SERR CVMMN!")); // FREE PIZZA!
console.log(rot13("SERR YBIR?")); // FREE LOVE?
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")); // THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.