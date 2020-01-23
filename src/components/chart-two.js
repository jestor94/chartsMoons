export const graphdataTwo = {
    type: 'doughnut',
    data: {
      labels: ['SmartPhone', 'Tablet'],
      datasets: [
        { // one line graph
        //   label: 'Revenue',
          data: [122, 97],
          backgroundColor: [
            '#4ba6e3', // Blue
            '#115b8c',

          ],
          borderColor: [
            '#4ba6e3',
            '#115b8c',

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
  
  export default graphdataTwo;
  