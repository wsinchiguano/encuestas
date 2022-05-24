import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',

})
export class ChartComponent implements OnInit {

    @Input() accounts:any;

    countryChart: any;

    countryChartOptions: any;


  constructor() { }

  ngOnInit() {
    this.countryChart = {

        datasets: [
            {
                data: [300, 100],
                backgroundColor: [
                    '#0F8BFD',
                    '#545C6B'
                ],
                hoverBackgroundColor: [
                    '#0F8BFD',
                    '#545C6B',
                ],
                borderColor: 'transparent',
                fill: true
            }
        ]
    };

    this.countryChartOptions = {
        cutout: 100,
        plugins: {
            legend: {
                labels: {
                    color: '#ebedef'
                }
            }
        }
    };
}

}
