<template>
<div id="app">
    <div class="container">
        <div class="col-md-4">
            <md-card>
            
                <md-card-header>Revenue: {{totalOne}}</md-card-header>
                <br>
                <md-card-content>
                    <canvas id="first-chart"></canvas>
                </md-card-content>
                <br><br>
                <md-card-actions>
                    <div class="col-md-6">{{labelOneOne}}: {{dataOneOne}}</div>
                    <div class="col-md-6">{{labelOneTwo}}: {{dataOneTwo}}</div>
                </md-card-actions>

            </md-card>
            
        </div>
        <div class="col-md-4">
            <md-card>

                <md-card-header>Impressions {{totalTwo}}</md-card-header>
                <br>
                <md-card-content>
                    <canvas id="second-chart"></canvas>
                </md-card-content>
                <br><br>
                <md-card-actions>
                    <div class="col-md-6">{{labelTwoOne}}: {{dataTwoOne}}</div>
                    <div class="col-md-6">{{labelTwoTwo}}: {{dataTwoTwo}}</div>
                </md-card-actions>

            </md-card>
        </div>
        <div class="col-md-4">
            <md-card>

                <md-card-header>Visits {{totalThree}}</md-card-header>
                <br>
                <md-card-content>
                    <canvas id="third-chart"></canvas>
                </md-card-content>
                <br><br>
                <md-card-actions>
                    <div class="col-md-6">{{labelThreeOne}}: {{dataThreeOne}}</div>
                    <div class="col-md-6">{{labelThreeTwo}}: {{dataThreeTwo}}</div>
                </md-card-actions>

            </md-card>
        </div>
    </div>
</div>
</template>

<script>
import graphdata from './chart-one.js';
import graphdataTwo from './chart-two.js';
import graphdataThree from './chart-three.js'
import Chart from 'chart.js';



export default {
    
    name: 'Graphics',
    data() {
        return {
            graphdata: graphdata,
            graphdataTwo: graphdataTwo,
            graphdataThree: graphdataThree,
            totalOne: 0,
            totalTwo: 0,
            totalThree: 0,
            dataOneOne: 0,
            dataOneTwo: 0,
            dataTwoOne: 0,
            dataTwoTwo: 0,
            dataThreeOne: 0,
            dataThreeTwo: 0,
            labelOneOne: '',
            labelOneTwo:'',
            labelTwoOne: '',
            labelTwoTwo: '',
            labelThreeOne: '',
            labelThreeTwo: '',
        }
    },
    methods: {
        
        createChart(chartId, chartData) {
            const ctx = document.getElementById(chartId);
            this.dataOneOne = chartData.data.datasets[0].data[0]
            this.dataOneTwo = chartData.data.datasets[0].data[1]
            this.totalOne = this.dataOneOne + this.dataOneTwo
            this.labelOneOne = chartData.data.labels[0]
            this.labelOneTwo = chartData.data.labels[1]


            new Chart(ctx, {
                type: chartData.type,
                data: chartData.data,
                options: chartData.options,
            });
        },

        createChartTwo(chartId, chartData) {
            const ctx = document.getElementById(chartId);
            // this.totalTwo = chartData.data.datasets[0].data[0] + chartData.data.datasets[0].data[1];
            this.dataTwoOne = chartData.data.datasets[0].data[0]
            this.dataTwoTwo = chartData.data.datasets[0].data[1]
            this.totalTwo = this.dataTwoOne + this.dataTwoTwo
            this.labelTwoOne = chartData.data.labels[0]
            this.labelTwoTwo = chartData.data.labels[1]
            new Chart(ctx, {
                type: chartData.type,
                data: chartData.data,
                options: chartData.options
            });
        },

        createChartThree(chartId, chartData) {
            const ctx = document.getElementById(chartId);
            // this.totalThree = chartData.data.datasets[0].data[0] + chartData.data.datasets[0].data[1];
            this.dataThreeOne = chartData.data.datasets[0].data[0]
            this.dataThreeTwo = chartData.data.datasets[0].data[1]
            this.totalThree = this.dataThreeOne + this.dataThreeTwo
            this.labelThreeOne = chartData.data.labels[0]
            this.labelThreeTwo = chartData.data.labels[1]
            new Chart(ctx, {
                type: chartData.type,
                data: chartData.data,
                options: chartData.options
            });
        }
    },
    
    mounted() {
      this.createChart('first-chart', this.graphdata);
      this.createChartTwo('second-chart', this.graphdataTwo);
      this.createChartThree('third-chart', this.graphdataThree);
    }
}
</script>


<style>
    .md-card {
        /* width: 320px; */
        height: 30vh;
        margin: 4px;
        display: inline-block;
        vertical-align: top;
        border-style: solid;
        border-color: rgb(129, 123, 123);
        -webkit-box-shadow: 10px 10px 5px 6px rgba(0,0,0,0.75);
        -moz-box-shadow: 10px 10px 5px 6px rgba(0,0,0,0.75);
        box-shadow: 10px 10px 5px 6px rgba(0,0,0,0.75);
    }
</style>
