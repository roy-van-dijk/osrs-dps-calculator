import { Component, OnInit } from '@angular/core';
import { CalculationService } from '../shared/services/calculation.service';

@Component({
    selector: 'app-calculation-results',
    templateUrl: './calculation-results.component.html',
    styleUrls: ['./calculation-results.component.scss']
})
export class CalculationResultsComponent implements OnInit {

    constructor(private calculationService: CalculationService) { }

    ngOnInit() {
    }

}
