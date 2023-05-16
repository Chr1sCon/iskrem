let iceCreamChart;

export function createIceCreamChart() {
    const chartElement = document.getElementById('ice-cream-chart');
    iceCreamChart = new Chart(chartElement, {
        type: 'line',
        data: {
            datasets: []
        },
        options: {
            animation: false,
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'day'
                    }
                },
                y: {
                    type: 'linear',
                    min: 0
                }
            }
        }
    });
}

export function updateIceCreamChart(iceCreamData) {
    iceCreamChart.data.datasets = iceCreamData.map(person => ({
        label: person.name,
        data: person.timestamps.map((timestamp, index) => ({
            x: timestamp,
            y: index + 1
        })),
        borderColor: stringToColor(person.name),
        fill: false
    }));
    iceCreamChart.update();
}

function stringToColor(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = '#';
    for (let i = 0; i < 3; i++) {
        const value = (hash >> (i * 8)) & 0xff;
        color += ('00' + value.toString(16)).substr(-2);
    }
    return color;
}
