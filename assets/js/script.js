document.getElementById("convertirBtn").addEventListener("click", function() {

    const cantidad = document.getElementById("cantidad").value;
    const moneda = document.getElementById("moneda").value;
    
    convertirMoneda(cantidad, moneda);
});

async function convertirMoneda(cantidad, moneda) {
    try {

        const response = await fetch(`https://mindicador.cl/api/${moneda}`);
        const data = await response.json();

        const tasaCambio = data.serie[0].valor;
        

        const cantidadConvertida = cantidad / tasaCambio;
        

        document.getElementById("resultado").textContent = `Resultado: ${cantidadConvertida.toFixed(2)} ${moneda}`;

        const historialResponse = await fetch(`https://mindicador.cl/api/${moneda}?cantidad=10`);
        const historialData = await historialResponse.json();

        const fechas = historialData.serie.map(dato => dato.fecha.slice(0, 10));
        const valores = historialData.serie.map(dato => dato.valor);

        renderizarGrafico(fechas, valores);

    } catch (error) {

        console.error("Error al obtener la tasa de cambio:", error);
        document.getElementById("resultado").textContent = "Error al obtener la tasa de cambio. Por favor, inténtalo de nuevo más tarde.";
    }
}
        

async function getSomething() {
    try {
        const res = await fetch("https://mindicador.cl/api");
        const data = await res.json();
        console.log(data);
    } catch (e) {
        alert(e.message);
    }
}
getSomething();