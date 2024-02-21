const verifyNumber = 1598; //informe aqui o número à ser verificado! :D

function fibonacciSequence(value) {
    let sequence = [0, 1];
    for (let i = 2; sequence[sequence.length - 1] <= value; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

function verifyFibonacciSequence(value) {
    let sequence = fibonacciSequence(value);
    let verify = sequence.includes(value);

    let message = (verify)
    ? "O número " +value +" pertence a sequência de Fibbonacci!"
    : "O número " +value +" não pertence a sequência de Fibbonacci!";

    return message;
}

console.log(fibonacciSequence(verifyNumber));
console.log(verifyFibonacciSequence(verifyNumber));