import * as Chart from 'chart.js';

export function renderChart(values, canvas) {
    let transactions = values.transactions;
    if ( transactions.length > 0 ) {
        return new Promise( (resolve, reject) => {
            // create array for data displayed
            transactions = transactions.map( transaction => transaction.value );
            // create array for labels on the x axis
            let txnLabels = [];
            transactions.forEach( (transaction, index) => {
                txnLabels.push(`${index} txn`);
            } )
            // chart config
            let contMsgsChart = new Chart(canvas, {
                type: 'line',
                data: {
                    labels: txnLabels,
                    datasets: [{
                            label: 'ETH value of txns',
                            data: transactions,
                            borderColor: 'blue',
                            fill: false
                        }]
                },
                options: {
                    scales: {
                        yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                    }
                }
            });
            resolve(contMsgsChart);
        })
    }
}

   
    
