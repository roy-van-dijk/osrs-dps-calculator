import { Injectable } from '@angular/core';
import { PrayerService } from './prayer.service';
import { SpellService } from './spell.service';
import { StatService } from './stat.service';
import { EquipmentService } from './equipment.service';

@Injectable({
    providedIn: 'root'
})
export class MaxHitService {

    constructor(
        private prayerService: PrayerService, 
        private spellService: SpellService, 
        private statService: StatService, 
        private equipmentService: EquipmentService) { 
    }

    public getMaxHit() {
        let boostedStrength = this.statService.stats.strength.boosted;
        let prayerBoost = 1;
        let combatStyleBoost = 0;
        Object.keys(this.prayerService.activePrayers).forEach(prayer => {
            if (this.prayerService.activePrayers[prayer].boosts.hasOwnProperty('strength')) {
                prayerBoost = this.prayerService.activePrayers[prayer].boosts.strength;
            }
        });
        if (this.equipmentService.selectedCombatStyle.style === 'aggressive') {
            combatStyleBoost = 3;
        } else if (this.equipmentService.selectedCombatStyle.style === 'controlled') {
            combatStyleBoost = 1;
        }


        let effectiveStrength = Math.floor((boostedStrength * prayerBoost) + combatStyleBoost);

        let baseDamage = 1.3 + (effectiveStrength/10) + (this.equipmentService.bonuses.melee_strength/80) + ((effectiveStrength * this.equipmentService.bonuses.melee_strength)/640);
        let maxHit = Math.floor(baseDamage);
        return maxHit;
    }
}
