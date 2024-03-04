const billingByState = [
    { abbreviation: 'SP', value: 67836.43 },
    { abbreviation: 'RJ', value: 36678.66 },
    { abbreviation: 'MG', value: 29229.88 },
    { abbreviation: 'ES', value: 27165.48 },
    { abbreviation: 'outros estados', value: 19849.53 }
];

function listStates(state) {
    let output = '';
    for (let i = 0; i < state.length; i++) {
        let stateName = state[i].abbreviation;
        let stateBilling = state[i].value.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL' });
        output += (i === 0 ? '' : ' ') + `${stateName} - ${stateBilling}\n`;
    }
    return output;
}

function monthlyTotal(state) {
    let amount = 0;
    for (let i = 0; i < state.length; i++) {
        amount += state[i].value;
    }
    return amount;
}

function percentageRepresentation(state) {
    let amount = monthlyTotal(state);
    let output = '';
    for (let i = 0; i < state.length; i++) {
        let stateName = state[i].abbreviation;
        let statePercentage = (state[i].value / amount).toLocaleString('pt-BR', {style: 'percent', maximumFractionDigits: 2 });
        output += (i === 0 ? '' : ' ') + `${stateName} - ${statePercentage}\n`;
    }
    return output;
}

console.log("Faturamento mensal das distribuidoras por estado:\n", listStates(billingByState));
console.log("Faturamento total:", monthlyTotal(billingByState).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL' }),"\n");
console.log("Percentual de representação que cada estado teve dentro do valor total mensal da distribuidora:\n", percentageRepresentation(billingByState));