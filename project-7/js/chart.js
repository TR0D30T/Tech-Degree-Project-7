const trafficCanvas = document.getElementById('traffic-chart');

let hourLabels = ["2-4", "4-6","6-8","8-10","10-12","10-12","12-14","14-16","16-18","18-20","20-22","22-24"];
let hourData = [ 750 , 1250 , 1000 , 2000 , 1500 , 1750 , 1250 , 1850 , 2250 , 1500 , 2500, 2000];
let dayLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
let dayData = [650, 2300, 1000, 2000, 1250, 2750, 2000];
let weekLabels = ["Week-1","Week-2","Week-3","Week-4","Week-5","Week-6","Week-7","Week-8","Week-9","Week-10","Week-11","Week-12",];
let weekData = [ 850 , 1350 , 900 , 1900 , 1400 , 1850 , 1350 , 1650 , 2750 , 1000 , 2200, 2200];
let monthLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let monthData = [ 650 , 1550 , 700 , 2100 , 1200 , 2050 , 1550 , 1850 , 2950 , 2000 , 2600, 2100];



let trafficData = {
    labels: hourLabels, // labels from above code
    datasets: [{
      data: hourData, // data on side of chart
      backgroundColor: 'rgba(116, 119, 191, .3)',
      borderwidth: 1,
    }]
  };

let trafficOptions = {
    aspectRatio: 2.5,
    animation: {
        duration: 1000
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    legend: {
        display: false
    }
};

let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});




let trafficNavList = document.getElementsByClassName("traffic-nav")[0];

//traffic line chart update
function chartUpdate(){
    trafficChart.update();
    trafficNavList.classList.toggle("selected");
}

let trafficNav = document.getElementsByClassName("selected");

function remove (){
    trafficNav[0].classList.remove("selected");
}

trafficNavList.addEventListener("click", (event) => {
    
    trafficNavList.classList.remove("selected");
    
    trafficNavList = event.target;
       if(trafficNavList.innerHTML == "Hourly"){
        trafficData.labels = hourLabels;
        trafficData.datasets[0].data = hourData;
        chartUpdate();
    } else if (trafficNavList.innerHTML == "Daily"){
        trafficData.labels = dayLabels;
        trafficData.datasets[0].data = dayData;
        chartUpdate();
    } else if (trafficNavList.innerHTML == "Weekly"){
        trafficData.labels = weekLabels;
        trafficData.datasets[0].data = weekData;
        chartUpdate();
    } else if (trafficNavList.innerHTML == "Monthly"){
        trafficData.labels = monthLabels;
        trafficData.datasets[0].data = monthData;
        chartUpdate();
    }
})








/* Bar chart */

const barChart = document.getElementById('daily-traffic');
const weekDays = ["S", "M", "T", "W", "T", "F", "S"];

let dailyChartData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"], // labels from above code
    datasets: [{
      data: [50, 100, 150, 80, 250, 40, 110], // data on side of chart
      backgroundColor: '#7477BF',
      borderwidth: 1,
    }]
  };


  let dailyChartOptions = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    legend: {
        display: false
    }
};




let dailyTrafficChart = new Chart(barChart, {
    type: 'bar',
    data: dailyChartData,
    options: dailyChartOptions
});


/*Doughnut chart */

const doughnutChart = document.getElementById('doughnutChart');

let doughnutData = {
    labels: ["Desktops", "Tablets", "Phones"], // labels from above code
    datasets: [{
      data: [80, 140, 400], // data on side of chart
      backgroundColor: ['tomato', '#78CF82', 'steelblue'],
      borderwidth: 0
    }]
  };

  let doughnutOptions = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    legend: {
        display: true,
        position: 'right'
    },
    labels: {
        boxWidth: 1,
        fontStyle: 'bold',
        fontColor: 'black'
    }
};

var myDoughnutChart = new Chart(doughnutChart, {
    type: 'doughnut',
    data: doughnutData,
    options: doughnutOptions
});