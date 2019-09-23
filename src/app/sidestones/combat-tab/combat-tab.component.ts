import { Component, OnInit } from '@angular/core';
import { EquipmentService } from 'src/app/shared/services/equipment.service';

@Component({
    selector: 'app-combat-tab',
    templateUrl: './combat-tab.component.html',
    styleUrls: ['./combat-tab.component.scss']
})
export class CombatTabComponent implements OnInit {

    private objectKeys = Object.keys;
    
    private availableCombatStyles;
    
    constructor(private equipmentService: EquipmentService) { }
    
    ngOnInit() {
        this.availableCombatStyles = this.equipmentService.weaponTypes[this.equipmentService.gear.weapon_slot.weapon_category];
    }

    private selectCombatStyle(combatStyle) {
        this.equipmentService.selectedCombatStyle = combatStyle;
    }
    
}
