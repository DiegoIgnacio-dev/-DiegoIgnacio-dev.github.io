
let data= fetch('./data.json').then(Response=>{
    return Response.json();
});

console.log(data)


let dataGraf=[
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ]

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'fri', 'sat','sun'],
        datasets: [{
            label:'spending graf',
            data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
            backgroundColor: [
                'hsl(10, 79%, 65%)',
                'hsl(186, 34%, 60%)',
                'hsl(10, 79%, 65%)',
                'hsl(186, 34%, 60%)',
                'hsl(10, 79%, 65%)',
                'hsl(186, 34%, 60%)'
            ],
            onHover:[
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'

            ],

            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 0,
            borderRadius:4
        }]
    },
    //configuracion de estilos de grafico
    options: {
        scales:{
            y: {
                beginAtZero: true,
                grid: {
                    color: 'hsl(33, 100%, 98%)',
                    borderColor: 'hsl(33, 100%, 98%)',
                    tickColor: 'hsl(33, 100%, 98%)'
                  },
                ticks:{
                    color:'hsl(33, 100%, 98%)'
                }
                
            },

            x: {
                grid: {
                  color: 'hsl(33, 100%, 98%)',
                  borderColor: 'hsl(33, 100%, 98%)',
                  tickColor: 'hsl(33, 100%, 98%)'
                }
            }
        }

        
        
    }
});


 

 