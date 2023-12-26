const data = {
    'realisés': 62,
    'en cours': 13,
    'prevus': 23,

};

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels:  Object.keys(data).map(key => `${data[key]}% ${key}` ), 
        datasets: [
            {
                label: 'Number of GitHub Stars',
                data: Object.values(data),
                backgroundColor: ['#119706','#90EE90','#ececec'],
                
            },
        ],
    },

    options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'left',
          },
          title: {
            display: true,
          },
          
        },

      },
});


const barChartData = {
  'a': 62,
  'b': 13,
  'c': 23,
  'd': 13,
  'e': 62,
  'f': 13,
  'g': 23,
  'h': 13,
  'i': 62,
  'j': 13,
  'k': 23,
  'l': 13,


};
const barChart = document.getElementById('myBarChart').getContext('2d');
const myBarChart = new Chart(barChart, {
    type: 'bar',
    data: {
        labels: Object.keys(barChartData),
        datasets: [
            {
                data: Object.values(barChartData),
                backgroundColor: '#119706',
                
            },
        ],
    },

    options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
          },
          legend: {
            display: false, // Set to true if you want to display the legend
        }
          
        },
        borderRadius : 50,
        barThickness : 15,
        scales: {
          display : false,
          x: {
            grid: {
              display: false
            },
            
          },
          y: {
            grid: {
              display: false
            },
           
          },
        
          },
      }
        

});