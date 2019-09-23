import { Component, OnInit } from '@angular/core';
import { PrayerService } from 'src/app/shared/services/prayer.service';

@Component({
    selector: 'app-prayer-tab',
    templateUrl: './prayer-tab.component.html',
    styleUrls: ['./prayer-tab.component.scss']
})
export class PrayerTabComponent implements OnInit {

    private objectKeys = Object.keys;
    
    constructor(private prayerService: PrayerService) { }
    
    ngOnInit() {
    }
    
    private togglePrayer(selectedPrayer) {
        let activePrayersNew = [];

        if(!this.prayerService.activePrayers.includes(selectedPrayer)) {
            activePrayersNew.push(selectedPrayer);
        }

        this.prayerService.activePrayers.forEach(prayer => {
            if(!selectedPrayer.categories.some(r => prayer.categories.includes(r))) {
                activePrayersNew.push(prayer);
            }
        });

        this.prayerService.activePrayers = activePrayersNew;
    }

    private isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }
}
