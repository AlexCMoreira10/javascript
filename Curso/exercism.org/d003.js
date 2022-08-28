/* 
https://exercism.org/tracks/javascript/exercises/lasagna/edit
*/

const PREPARATION_MINUTES_PER_LAYER = 2; //MINUTOS POR CAMADAS
const EXPECTED_MINUTES_IN_OVEN = 40; //TEMPO QUE A LASANHA TEM QUE FICAR NO FORNO


function remainingMinutesInOven(actualMinutesInOven) { //TEMPO RESTANTE NO FORNO EM MINUTOS
    return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven
}

function preparationTimeInMinutes(numberOfLayers) { //CALCULAR O TEMPO TOTAL DE TRABALHO EM MINUTOS
    return numberOfLayers * PREPARATION_MINUTES_PER_LAYER;
}


function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) { // total de minutos de tempo (número de camadas, minutos reais no forno)
    return preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven;
} 