import { Injectable, OnInit } from '@angular/core';
import { MaxHitService } from './max-hit.service';

@Injectable({
    providedIn: 'root'
})
export class CalculationService implements OnInit {

    public maxHit = 0;
    public specMaxHit = 0;
    public accuracy = 0;
    public specAccuracy = 0;
    public dps = 0;

    constructor(private maxHitService: MaxHitService) {
        this.update();
    }

    ngOnInit() {
        
    }

    public update() {
        setInterval(() => {
            this.maxHit = this.maxHitService.getMaxHit();
        }, 100);
    }
}
