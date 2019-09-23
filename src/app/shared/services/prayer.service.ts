import { Injectable } from '@angular/core';
import prayers from '../../../assets/config/prayers.json';

@Injectable({
    providedIn: 'root'
})
export class PrayerService {
    
    public prayers = prayers;
    public activePrayers = [];
    
    constructor() { }

    ngOnInit() {

    }
}
