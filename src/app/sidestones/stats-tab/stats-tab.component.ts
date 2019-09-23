import { Component, OnInit } from '@angular/core';
import { StatService } from 'src/app/shared/services/stat.service';

@Component({
    selector: 'app-stats-tab',
    templateUrl: './stats-tab.component.html',
    styleUrls: ['./stats-tab.component.scss']
})
export class StatsTabComponent implements OnInit {

    private objectKeys = Object.keys;
    
    constructor(private statService: StatService) {
    }
    
    ngOnInit() {
    }
    
}
