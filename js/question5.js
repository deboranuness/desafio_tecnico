const sentence = "Hello, world! :D"; //informe aqui a frase à ser invertida! :D

function reverseString(str) {
    let reversedSentence = "";
    for (let i = 0; i < str.length; i++) {
        reversedSentence = str[i] + reversedSentence;
    }
    return reversedSentence;
}

console.log("A frase inicial é:", sentence);
console.log("A frase invertida é:", reverseString(sentence));