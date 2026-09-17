
// Funcion que concatena las cadenas de ciudad y país
export function concatenarCadenas(ciudad, pais) {
    return `resultado cadena larga = ${ciudad}, ${pais}`;
}

// Funcion que determina la cadena mas larga y la mas corta
export function compararCadenas(ciudad, pais) {
    const longitudCiudad = ciudad.length;
    const longitudPais = pais.length;

    let resultadoComparacion;

    if (longitudCiudad > longitudPais) {
        resultadoComparacion = `La ciudad es más larga (${longitudCiudad} caracteres) que el país (${longitudPais} caracteres).`;
    } else if (longitudCiudad < longitudPais) {
        resultadoComparacion = `El país es más largo (${longitudPais} caracteres) que la ciudad (${longitudCiudad} caracteres).`;
    } else {
        resultadoComparacion = `La ciudad y el país tienen la misma longitud (${longitudCiudad} caracteres).`;
    }

    return resultadoComparacion;
}
