var capitalLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"," ", "N", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] //25
var smallLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] 
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"] //10
var characters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", ",", ".","?", "/", "|", "\\", "=", "-", "+", ":", ";"]

var decryptInput = document.querySelector("#decrypt-input");
var display = document.querySelector("textarea");
var decryptButton = document.querySelector("#decrypt");
var decryptedText;

var passwordArray = capitalLetters.concat(numbers).concat(smallLetters).concat(characters);
var shuffledArray = ['y', 'T', 'Q', 'U',"/", 'd', 'S', 'A', '^', 's', '0', '9', 'Z',"|", 'W', '3', 'Y', ',', 'I', 'j', '_', '$', 'i', '!', 'c', ' ', '6', '2', ";", 'R', 'E', '#', 'r', 'b',"\\", 'a', 'M', '*', 'o', '&', '4', "=", 'u', 'e', '@', 'V', "-", 'H', 'g',":", 'p', 'z', "+", 'N', 't', 'F', 'm', 'C', ')', 'J', '1', 'x', 'l',"?", 'X', 'f', 'h', 'k', 'K', 'v', '5', 'L', 'q', '%', '(', 'B', 'D', '7', '.', 'G', 'w', '8', 'n']

var pos2;
decryptButton.addEventListener("click", ()=>{
    display.innerHTML = "";
    decryptedText = "";
    var index1 = [];
    var decryptValue = decryptInput.value;
    for (var k = 0; k < decryptValue.length; k++){
        pos2 = shuffledArray.indexOf(decryptValue[k]);
        index1.push(pos2);
    }
    for (var z = 0; z < index1.length; z++){
        decryptedText += passwordArray[index1[z]];

    }
    display.innerHTML = decryptedText;
});