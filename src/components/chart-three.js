export const graphdataThree = {
    type: 'doughnut',
    data: {
      labels: ['SmartPhone', 'Tablet'],
      datasets: [
        { 
            
            data: [85, 100],
            backgroundColor: [
                '#ded11f',
                '#aba338',

            ],
            borderColor: [
                '#ded11f',
                '#aba338',

            ],
            borderWidth: 3
        },

      ]
    },
    options: {
        legend: {
            display: false
          },
      responsive: true,
      lineTension: 1,
    }
  }
  
  export default graphdataThree;
  