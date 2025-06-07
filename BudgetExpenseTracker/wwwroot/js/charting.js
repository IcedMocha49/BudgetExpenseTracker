

    const ctxPie = document.getElementById('pieChart').getContext('2d');

    const spendingData = {
        1: [1000, 450, 200, 150], // January
    2: [950, 500, 180, 130],  // February
    3: [1100, 420, 210, 170], // March
    4: [1050, 460, 190, 160]  // April
      
    };

    const pieChart = new Chart(ctxPie, {
        type: 'doughnut',
    data: {
        labels: ['Rent', 'Groceries', 'Utilities', 'Entertainment'],
    datasets: [{
        label: 'Spending',
    data: spendingData[1], // Default: January
        backgroundColor: ['#007bff', '#a7288a', '#ffc107', '#dc3545']
            }]
        },
    options: {
        responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
        position: 'right'
                }
            }
        }
    });

    document.getElementById('monthSelect').addEventListener('change', function () {
        const selectedMonth = parseInt(this.value);
    pieChart.data.datasets[0].data = spendingData[selectedMonth] || [];
    pieChart.update();
    });



    // Bar Chart
   /* const ctxBar = document.getElementById('barChart').getContext('2d');
    new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April'],
            datasets: [
                {
                    label: 'Income',
                    data: [3000, 3200, 3100, 3000],
                    backgroundColor: '#28a745'
                },
                {
                    label: 'Spending',
                    data: [2000, 2500, 2200, 2400],
                    backgroundColor: '#dc3545'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }

    });*/


 
  // Grouped Bar Chart
  const barCtx = document.getElementById('groupbarChart').getContext('2d');
  const barChart = new Chart(barCtx, {
    type: 'bar',
    data: {
      labels: ['January', 'February', 'March', 'April'],
      datasets: [
        {
          label: 'Budgeted',
          data: [1000, 1200, 1100, 1300],
          backgroundColor: 'rgba(54, 162, 235, 0.6)',
        },
        {
          label: 'Actual',
          data: [950, 1250, 1080, 1400],
          backgroundColor: 'rgba(255, 99, 132, 0.6)',
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  // Line Chart
  /*const lineCtx = document.getElementById('lineChart').getContext('2d');
  const lineChart = new Chart(lineCtx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          label: 'Budgeted',
          data: [1000, 1200, 1100, 1300, 1250, 1400],
          borderColor: 'rgba(54, 162, 235, 1)',
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          tension: 0.3,
          fill: true
        },
        {
          label: 'Actual',
          data: [950, 1250, 1080, 1400, 1320, 1500],
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          tension: 0.3,
          fill: true
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });*/



  /*  const progressBarCtx = document.getElementById('horizontalBarChart').getContext('2d');

    new Chart(progressBarCtx, {
        type: 'bar',
    data: {
        labels: ['Progress'],
    datasets: [{
        label: 'Saved',
    data: [7000],
    maxBarThickness: 40,
    backgroundColor: '#007bff'
      }]
    },
    options: {
        indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        x: {
        min: 0,
    max: 10000,
    ticks: {
        callback: (value) => `$${value.toLocaleString()}`
          }
        },
    y: {
        display: false
        }
      },
    plugins: {
        legend: {
        display: false
        },
    tooltip: {
        callbacks: {
        label: context => `$${context.raw.toLocaleString()} saved`
          }
        }
      }
    }
  });*/



const savingsProgress = 6000;
const savingsGoal = 10000;

const progressCtx = document.getElementById('progressChart').getContext('2d');

new Chart(progressCtx, {
    type: 'doughnut',
    data: {
        labels: ['Saved', 'Remaining'],
        datasets: [{
            data: [savingsProgress, savingsGoal - savingsProgress],
            backgroundColor: ['#4CAF50', '#e0e0e0'],
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        cutout: '70%',
        plugins: {
            tooltip: {
                callbacks: {
                    label: (context) => {
                        const value = context.raw;
                        return `$${value.toLocaleString()}`;
                    }
                }
            },
            legend: {
                display: false
            },
            title: {
                display: false
            }
        }
    }
});

const ctx = document.getElementById('incomeExpenseLineChart').getContext('2d');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Income',
                data: [3000, 3200, 3100, 4000, 3800, 4200],
                borderColor: '#4caf50',
                backgroundColor: 'rgba(76, 175, 80, 0.2)',
                fill: true,
                tension: 0.3
            },
            {
                label: 'Expenses',
                data: [2500, 2700, 2900, 3200, 3500, 3700],
                borderColor: '#f44336',
                backgroundColor: 'rgba(244, 67, 54, 0.2)',
                fill: true,
                tension: 0.3
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: context => `$${context.raw.toLocaleString()}`
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Amount ($)'
                },
                ticks: {
                    callback: value => `$${value}`
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Month'
                }
            }
        }
    }
});


//top spending chart 

  /*  const spendingCtx = document.getElementById('topSpendingChart').getContext('2d');

    new Chart(spendingCtx, {
        type: 'doughnut',
    data: {
        labels: ['Rent', 'Groceries', 'Transportation'],
    datasets: [{
        data: [1200, 450, 300],
    backgroundColor: ['#f44336', '#2196f3', '#ff9800'],
    borderWidth: 1
      }]
    },
    options: {
        responsive: true,
    cutout: '65%',
    plugins: {
        legend: {
        display: false
        },
    tooltip: {
        callbacks: {
        label: function(context) {
              return `${context.label}: $${context.raw.toLocaleString()}`;
            }
          }
        },
    title: {
        display: false
        }
      }
    }
    });*/


