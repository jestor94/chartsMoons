export const graphdata = {
    type: 'doughnut',
    data: {
      labels: ['SmartPhone', 'Tablet'],
      datasets: [
        { // one line graph
        //   label: 'Revenue',
          data: [62, 27],
          backgroundColor: [
            '#5ccc58', // Blue
            '#157d11',

          ],
          borderColor: [
            '#5ccc58',
            '#157d11',

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
  
  export default graphdata;
  