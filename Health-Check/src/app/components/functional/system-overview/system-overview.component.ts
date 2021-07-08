import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
	selector: 'app-system-overview',
	templateUrl: './system-overview.component.html',
	styleUrls: ['./system-overview.component.css']
})
export class SystemOverviewComponent implements OnInit {
	
	constructor() { }

	ngOnInit(): void {
	}

}
