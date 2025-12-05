// Навігація між сторінками
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    const navLinks = document.querySelectorAll('.nav-link');
    
    pages.forEach(page => page.classList.remove('active'));
    navLinks.forEach(link => link.classList.remove('active'));
    
    document.getElementById(pageId).classList.add('active');
    event.target.classList.add('active');
}

// Дані для графіків
const years = ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'];

// Графік ВВП
const gdpData = {
    labels: years,
    datasets: [{
        label: 'Зростання ВВП (%)',
        data: [1.8, 2.0, 3.5, 2.8, 2.5, -8.3, 5.5, 6.8, 2.3, 2.3, 1.9],
        borderColor: '#9b7eba',
        backgroundColor: 'rgba(155, 126, 186, 0.15)',
        borderWidth: 3,
        tension: 0.4,
        fill: true
    }]
};

new Chart(document.getElementById('gdpChart'), {
    type: 'line',
    data: gdpData,
    options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                display: true,
                position: 'top'
            },
            title: {
                display: true,
                text: 'Динаміка зростання ВВП Португалії (2015-2025)',
                font: { size: 16, weight: 'bold' }
            }
        },
        scales: {
            y: {
                beginAtZero: false,
                title: {
                    display: true,
                    text: 'Зростання ВВП (%)'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Рік'
                }
            }
        }
    }
});

// Графік інфляції
const inflationData = {
    labels: years,
    datasets: [{
        label: 'Рівень інфляції (%)',
        data: [0.5, 0.6, 1.6, 1.0, 0.3, -0.1, 0.9, 7.8, 4.3, 2.7, 2.2],
        borderColor: '#b89dd1',
        backgroundColor: 'rgba(184, 157, 209, 0.15)',
        borderWidth: 3,
        tension: 0.4,
        fill: true
    }]
};

new Chart(document.getElementById('inflationChart'), {
    type: 'line',
    data: inflationData,
    options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                display: true,
                position: 'top'
            },
            title: {
                display: true,
                text: 'Динаміка інфляції в Португалії (2015-2025)',
                font: { size: 16, weight: 'bold' }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Інфляція (%)'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Рік'
                }
            }
        }
    }
});

// Графік державного боргу
const debtData = {
    labels: years,
    datasets: [{
        label: 'Державний борг (% ВВП)',
        data: [131.2, 131.5, 126.1, 121.5, 116.8, 134.9, 127.4, 112.4, 99.1, 95.0, 92.5],
        borderColor: '#8a6ba8',
        backgroundColor: 'rgba(138, 107, 168, 0.15)',
        borderWidth: 3,
        tension: 0.4,
        fill: true
    }]
};

new Chart(document.getElementById('debtChart'), {
    type: 'line',
    data: debtData,
    options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                display: true,
                position: 'top'
            },
            title: {
                display: true,
                text: 'Динаміка державного боргу Португалії (2015-2025)',
                font: { size: 16, weight: 'bold' }
            }
        },
        scales: {
            y: {
                beginAtZero: false,
                title: {
                    display: true,
                    text: 'Державний борг (% ВВП)'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Рік'
                }
            }
        }
    }
});