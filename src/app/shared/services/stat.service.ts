import { Injectable } from '@angular/core';
import stats from '../../../assets/config/stats.json';

@Injectable({
    providedIn: 'root'
})
export class StatService {

    public stats = stats;
    public boosts = [];

    constructor() {
    }
}
