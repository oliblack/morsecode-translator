let morseCode=[];

morseCode["a"]=". _";
morseCode["b"]="_ . . .";
morseCode["c"]="_ . _ .";
morseCode["d"]="_ . .";
morseCode["e"]=".";
morseCode["f"]=". . _ .";
morseCode["g"]="_ _ .";
morseCode["h"]=". . . .";
morseCode["i"]=". .";
morseCode["j"]=". _ _ _";
morseCode["k"]="_ . _";
morseCode["l"]=". _ . .";
morseCode["m"]="_ _";
morseCode["n"]="_ .";
morseCode["o"]="_ _ _";
morseCode["p"]=". _ _ .";
morseCode["q"]="_ _ . _";
morseCode["r"]=". _ .";
morseCode["s"]=". . .";
morseCode["t"]="_";
morseCode["u"]=". . _";
morseCode["v"]=". . . _";
morseCode["w"]=". _ _";
morseCode["x"]="_ . . _";
morseCode["y"]="_ . _ _";
morseCode["z"]="_ _ . .";
morseCode["1"]=". _ _ _ _";
morseCode["2"]=". . _ _ _";
morseCode["3"]=". . . _ _";
morseCode["4"]=". . . . _";
morseCode["5"]=". . . . .";
morseCode["6"]="_ . . . .";
morseCode["7"]="_ _ . . .";
morseCode["8"]="_ _ _ . .";
morseCode["9"]="_ _ _ _ .";
morseCode["0"]="_ _ _ _ _";

let morseDecode=[];

morseDecode[". _"] ="a";
morseDecode["_ . . ."] = "b";
morseDecode["_ . _ ."] = "c";
morseDecode["_ . ."] = "d";
morseDecode["."] = "e";
morseDecode[". . _ ."] = "f";
morseDecode["_ _ ."] = "g";
morseDecode[". . . ."] = "h";
morseDecode[". ."] = "i";
morseDecode[". _ _ _"] = "j";
morseDecode["_ . _"] = "k";
morseDecode[". _ . ."] = "l";
morseDecode["_ _"] = "m";
morseDecode["_ ."] = "n";
morseDecode["_ _ _"] = "o";
morseDecode[". _ _ ."] = "p";
morseDecode["_ _ . _"] = "q";
morseDecode[". _ ."] = "r";
morseDecode[". . ."] = "s";
morseDecode["_"] = "t";
morseDecode[". . _"] = "u";
morseDecode[". . . _"] = "v";
morseDecode[". _ _"] = "w";
morseDecode["_ . . _"] = "x";
morseDecode["_ . _ _"] = "y";
morseDecode["_ _ . ."] = "z";
morseDecode[". _ _ _ _"] = "1";
morseDecode[". . _ _ _"] = "2";
morseDecode[". . . _ _"] = "3";
morseDecode[". . . . _"] = "4";
morseDecode[". . . . ."] = "5";
morseDecode["_ . . . ."] = "6";
morseDecode["_ _ . . ."] = "7";
morseDecode["_ _ _ . ."] = "8";
morseDecode["_ _ _ _ ."] = "9";
morseDecode["_ _ _ _ _"] = "0";


function codeButtonClicked(){
    let inputTextArea = document.getElementById("inputTextArea");
    let morseTextArea = document.getElementById("morseTextArea");
    let inputTextArray = inputTextArea.value.toLowerCase().split("");

    let morseCodeString = "";

    for (let index = 0; index < inputTextArray.length; index++) {
        const element = inputTextArray[index];
        if (element in morseCode){
            morseCodeString = (morseCodeString + morseCode[element] + "   ");
        }
    }
    morseTextArea.value = morseCodeString; 
    inputTextArea.value = ""; 
}

function decodeButtonClicked(){
    let inputTextArea = document.getElementById("inputTextArea");
    let morseTextArea = document.getElementById("morseTextArea");
    let morseTextArray = morseTextArea.value.split("   ");
    let textString = "";

    for (let index = 0; index < morseTextArray.length; index++) {
        const element = morseTextArray[index];
        if (element in morseDecode){
            textString = (textString + morseDecode[element] + "");
        }
    }
    inputTextArea.value = textString;
    morseTextArea.value = "";   
}