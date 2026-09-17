// servicesEjercicio3.js
import { concatenarCadenas, compararCadenas } from '../js/ejercicio03.js';


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('submitBtn').addEventListener('click', () => {
        const ciudad = document.getElementById('ciudad').value;
        const pais = document.getElementById('pais').value;

        const cadenaConcatenada = concatenarCadenas(ciudad, pais);
        const resultadoComparacion = compararCadenas(ciudad, pais);

        document.getElementById('resultado').innerHTML = `
            <p>${cadenaConcatenada}</p>
            <p>${resultadoComparacion}</p>
        `;
    });
});
