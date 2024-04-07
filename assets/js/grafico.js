function renderizarGrafico(fechas, valores) {
    const contexto = document.getElementById("graficoHistorial").getContext("2d");
    
    new Chart(contexto, {
        type: "line",
        data: {
            labels: ['2024-04-1', '2024-04-02', '2024-04-03', '2024-04-04', '2024-04-05', '2024-04-06', '2024-04-07'],
            datasets: [{
                label: 'Historial ultimos 10 dias',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: 'green',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
} 
