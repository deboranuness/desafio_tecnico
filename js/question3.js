const data = require('../json/dados.json'); // leitura dos dados iniciais
const monthlyBilling = clearNullValues(data); // desconsiderando dias sem faturamento

function clearNullValues(list){
    let cleanList = [];
    for (let i = list.length - 1; i >= 0; i--) {
        if (list[i].valor === 0) {
            list.splice(i, 1);
            cleanList = list;
        }
    }
    return cleanList;
}

function lowestBilling(list){
    let lowestValue = list[0];
    for(let i = 0; i < list.length; i++){
        if (lowestValue.valor >= list[i].valor) {
            lowestValue = list[i];
        }
    }
    return lowestValue;
}

const lowestBillingDay = lowestBilling(monthlyBilling).dia;
const lowestBillingValue = lowestBilling(monthlyBilling).valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL' });

function highestBilling(list){
    let highestValue = list[0];
    for(let i = 0; i < list.length; i++){
        if (highestValue.valor <= list[i].valor) {
            highestValue = list[i];
        }
    }
    return highestValue;
}

const highestBillingDay = highestBilling(monthlyBilling).dia;
const highestBillingValue = highestBilling(monthlyBilling).valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL' });

function monthlyTotal(list){
    let amount = 0;
    for (let i = 0; i < list.length; i++) {
        amount += list[i].valor;
    }
    return amount;
}

function daysAboveAverageBilling(list){
    let averageBilling = monthlyTotal(list) / list.length;
    let daysAboveAvg = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i].valor > averageBilling) {
            daysAboveAvg++;
        }
    }
    return daysAboveAvg;
}

console.log("O menor faturamento do mês foi no dia " +lowestBillingDay +", com a receita de " +lowestBillingValue);
console.log("O maior faturamento do mês foi no dia " +highestBillingDay +", com a receita de " +highestBillingValue);
console.log("O faturamento diário foi superior à média mensal em " +daysAboveAverageBilling(monthlyBilling) +" dias desse mês.");