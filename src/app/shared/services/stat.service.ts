import { Injectable } from '@angular/core';
import stats from '../../../assets/config/stats.json';
import boosts from '../../../assets/config/boosts.json';

@Injectable({
    providedIn: 'root'
})
export class StatService {

    public stats = stats;
    public boosts = boosts;

    public activeBoosts = {
        "attack": this.boosts[0],
        "strength": this.boosts[0],
        "defence": this.boosts[0],
        "ranged": this.boosts[0],
        "magic": this.boosts[0],
        "prayer": this.boosts[0],
        "hitpoints": this.boosts[0]
    };

    constructor() {
    }

    public boost(boost, boostType) {
        this.activeBoosts[boostType] = boost;
        this.recalculateStats();
    }

    private recalculateStats() {
        Object.keys(this.activeBoosts).forEach((stat) => {
            if (this.activeBoosts[stat] === this.boosts[0]) {
                this.stats[stat].boosted = this.stats[stat].level;
            } else {
                let boost = this.activeBoosts[stat].boosts[stat];
                this.stats[stat].boosted = Math.floor(this.stats[stat].level * boost.modifier) + boost.base;
            }
        });
    }

}
