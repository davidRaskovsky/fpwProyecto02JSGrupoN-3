// Selecciona el formulario y el contenedor de resultados
const formulario = document.getElementById('formulario');
const resultadoDiv   = document.getElementById('resultado');
const resultadoLaMasLargaDiv = document.getElementById('resultadoLaMasLarga');

// Agrega un evento al formulario para manejar el envío
formulario.addEventListener('submit', function(event) {
    event.preventDefault(); /**  Previene el envío del formulario */
    // Obtiene los valores ingresados
    const ciudad = document.getElementById("ciudad").value;
    // Concatenar las cadenas
    const resultado = `${ciudad}, ${pais}`;

    // Calcular longitudes
    const longitudCiudad = ciudad.length;
    const longitudPais = pais.length;

    // Mostrar resultados
    resultadoDiv.textContent = `Resultado: ${resultado}`;
    resultadoLaMasLargaDiv.textContent = compararLongitudes(longitudCiudad, longitudPais);
},

// Función para comparar longitudes
function compararLongitudes(longitudCiudad, longitudPais) {
    if (longitudCiudad > longitudPais) {
        return "La ciudad es más larga que el país.";
    } else if (longitudCiudad < longitudPais) {
        return "El país es más largo que la ciudad.";
    } else {
        return "La ciudad y el país tienen la misma longitud.";
    }
})
