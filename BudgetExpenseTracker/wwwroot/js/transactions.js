
//today's date

$(document).ready(function () {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString(undefined, options);
    $('#current-date').text(formattedDate);
});


document.addEventListener("DOMContentLoaded", function () {
    loadCategories();
});

function loadCategories() {
    $.ajax({
        url: '/Category/GetCategories',
        method: 'GET',
        success: function (categories) {
            let $select = $('#category');
            $select.empty().append('<option value="">-- Select Category --</option>');

            if (Array.isArray(categories) && categories.length > 0) {
                $.each(categories, function (i, category) {
                    $select.append($('<option>', {
                        value: category.id,
                        text: category.name
                    }));
                });
            } else {
                $select.append('<option value="">No categories available</option>');
            }
        },
        error: function () {
            alert("Error loading categories.");
        }
    });
}

document.getElementById('amount').addEventListener('input', function (e) {
    const value = e.target.value;
    const isValid = /^\d*\.?\d{0,2}$/.test(value);

    if (!isValid) {
        e.target.setCustomValidity('Enter a valid amount (up to 2 decimal places)');
    } else {
        e.target.setCustomValidity('');
    }
});


// Dark Mode toggle button and body
const toggleButton = document.getElementById('darkModeToggle');
const body = document.body;
const modeText = document.getElementById('modeText');

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    toggleButton.checked = true; 
    modeText.textContent = 'Light Mode'; 
} else {
    modeText.textContent = 'Dark Mode'; 
}

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        modeText.textContent = 'Light Mode'; 
    } else {
        localStorage.setItem('theme', 'light');
        modeText.textContent = 'Dark Mode'; 
    }
});


    const ctx = document.getElementById('stackedBarChart').getContext('2d');

    const stackedBarChart = new Chart(ctx, {
        type: 'bar',
    data: {
        labels: ['May 1', 'May 5', 'May 12', 'May 15'],
    datasets: [
    {
        label: 'Groceries',
    data: [120, 0, 0, 0],
    backgroundColor: '#0d6efd' 
          },
    {
        label: 'Entertainment',
    data: [0, 200, 0, 0],
    backgroundColor: '#ffc107' 
          },
    {
        label: 'Utilities',
    data: [0, 0, 0, 80],
    backgroundColor: '#0dcaf0'
          }
    ]
      },
    options: {
        responsive: true,
    plugins: {
        legend: {
        position: 'bottom'
          },
    title: {
        display: false
          },
    tooltip: {
        mode: 'index',
    intersect: false
          }
        },
    scales: {
        x: {
        stacked: true
          },
    y: {
        stacked: true,
    title: {
        display: true,
    text: 'Amount ($)'
            }
          }
        }
      }
    });





    const balanceChart = document.getElementById('balanceChart').getContext('2d');

    const dates = ['May 1', 'May 5', 'May 12', 'May 15'];
    const amounts = [-120, -200, 120, -80];

    // Calculate running balance
    const balances = [];
    let runningTotal = 0;
    for (let i = 0; i < amounts.length; i++) {
        runningTotal += amounts[i];
    balances.push(runningTotal);
    }

    // Chart.js Line Chart
new Chart(balanceChart, {
        type: 'line',
    data: {
        labels: dates,
    datasets: [{
        label: 'Cumulative Balance',
    data: balances,
    fill: false,
    borderColor: 'rgba(54, 162, 235, 0.9)',
    backgroundColor: 'rgba(54, 162, 235, 0.6)',
    tension: 0.2,
    pointRadius: 5,
    pointHoverRadius: 7
        }]
      },
    options: {
        responsive: true,
    plugins: {
        legend: {
        position: 'top'
          },
    tooltip: {
        mode: 'index',
    intersect: false
          }
        },
    scales: {
        y: {
        title: {
        display: true,
    text: 'Balance ($)'
            },
    beginAtZero: false
          }
        }
      }
    });




    const monthlyExpChart = document.getElementById('monthlyExpensesChart').getContext('2d');

    const months = ['May', 'June', 'July'];

const chart = new Chart(monthlyExpChart, {
        type: 'bar',
    data: {
        labels: months,
    datasets: [
    {
        label: 'Groceries',
    data: [120, 180, 150],
    backgroundColor: '#0d6efd' 
          },
    {
        label: 'Entertainment',
    data: [200, 100, 80],
    backgroundColor: '#ffc107' 
          },
    {
        label: 'Utilities',
    data: [80, 90, 85],
    backgroundColor: '#0dcaf0' 
          },
    {
        label: 'Transport',
    data: [60, 75, 70],
    backgroundColor: '#198754' 
          }
    ]
      },
    options: {
        responsive: true,
    plugins: {
        legend: {
        position: 'bottom'
          },
    tooltip: {
        mode: 'index',
    intersect: false
          }
        },
    scales: {
        x: {
        stacked: true,
    title: {
        display: true,
    text: 'Month'
            }
          },
    y: {
        stacked: true,
    title: {
        display: true,
    text: 'Total Expenses ($)'
            },
    beginAtZero: true
          }
        }
      }
    });