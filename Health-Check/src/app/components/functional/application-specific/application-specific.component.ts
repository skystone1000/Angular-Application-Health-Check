import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
	selector: 'app-application-specific',
	templateUrl: './application-specific.component.html',
	styleUrls: ['./application-specific.component.css']
})
export class ApplicationSpecificComponent implements OnInit {
	// Charts Doc: https://www.npmjs.com/package/ng2-charts

	// Line Chart Parameters
	chartType: ChartType = 'line';
	public lineChartData: ChartDataSets[] = [
		{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
	];
	public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
	public lineChartOptions: (ChartOptions & { annotation?: any }) = {
		responsive: true,
	};
	public lineChartColors: Color[] = [
		{
			borderColor: 'black',
			backgroundColor: 'rgba(255,0,0,0.3)',
		},
	];
	public lineChartLegend = true;
	public lineChartType = this.chartType;
	public lineChartPlugins = [];

	// Bar Chart Parameters
	public barChartOptions: ChartOptions = {
		responsive: true,
	};
	public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
	public barChartType: ChartType = 'bar';
	public barChartLegend = true;
	public barChartPlugins = [];

	public barChartData: ChartDataSets[] = [
		{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
		{ data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
	];

	// Bubble Chart Parameters
	public bubbleChartOptions: ChartOptions = {
		responsive: true,
		scales: {
			xAxes: [{
				ticks: {
					min: 0,
					max: 30,
				}
			}],
			yAxes: [{
				ticks: {
					min: 0,
					max: 30,
				}
			}]
		}
	};
	public bubbleChartType: ChartType = 'bubble';
	public bubbleChartLegend = true;

	public bubbleChartData: ChartDataSets[] = [
		{
			data: [
				{ x: 10, y: 10, r: 10 },
				{ x: 15, y: 5, r: 15 },
				{ x: 26, y: 12, r: 23 },
				{ x: 7, y: 8, r: 8 },
			],
			label: 'Series A',
		},
	];

	// Scatter Chart Parameters
	// scatter
	public scatterChartOptions: ChartOptions = {
		responsive: true,
	};

	public scatterChartData: ChartDataSets[] = [
		{
			data: [
				{ x: 1, y: 1 },
				{ x: 2, y: 3 },
				{ x: 3, y: -2 },
				{ x: 4, y: 4 },
				{ x: 5, y: -3, r: 20 },
			],
			label: 'Series A',
			pointRadius: 10,
		},
	];
	public scatterChartType: ChartType = 'scatter';



	constructor() { }

	ngOnInit(): void {
	}

}
