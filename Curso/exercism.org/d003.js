/* 
https://exercism.org/tracks/javascript/exercises/lasagna/edit
*/

const PREPARATION_MINUTES_PER_LAYER = 2; //MINUTOS POR CAMADAS
const EXPECTED_MINUTES_IN_OVEN = 40; //TEMPO QUE A LASANHA TEM QUE FICAR NO FORNO
var camadas = 2;

export function remainingMinutesInOven(actualMinutesInOven) { //TEMPO RESTANTE NO FORNO EM MINUTOS
    actualMinutesInOven = EXPECTED_MINUTES_IN_OVEN - 10;
    return actualMinutesInOven;
}

function restanteMinutesInOven(actualMinutesInOven) { //CALCULAR O TEMPO DE PREPARAÇÃO EM MINUTOS
    actualMinutesInOven = EXPECTED_MINUTES_IN_OVEN - numberOfLayers * PREPARATION_MINUTES_PER_LAYER;
    return actualMinutesInOven;
}


export function preparationTimeInMinutes(numberOfLayers) { //CALCULAR O TEMPO TOTAL DE TRABALHO EM MINUTOS
    numberOfLayers = PREPARATION_MINUTES_PER_LAYER * camadas;
    return numberOfLayers;
}

export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) { // total de minutos de tempo (número de camadas, minutos reais no forno)
    return;
}