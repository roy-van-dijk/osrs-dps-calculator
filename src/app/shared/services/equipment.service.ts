import { Injectable, Injector } from '@angular/core';
import items from '../../../assets/config/items.json';
import weaponTypes from '../../../assets/config/weapon_types.json';

@Injectable({
    providedIn: 'root'
})
export class EquipmentService {

    public items = items;
    public weaponTypes = weaponTypes;
    public selectedCombatStyle;
    public gear = {
        head_slot: items.head_slot[0],
        cape_slot: items.cape_slot[0],
        neck_slot: items.neck_slot[0],
        ammunition_slot: items.ammunition_slot[0],
        weapon_slot: items.weapon_slot[0],
        body_slot: items.body_slot[0],
        shield_slot: items.shield_slot[0],
        legs_slot: items.legs_slot[0],
        hands_slot: items.hands_slot[0],
        feet_slot: items.feet_slot[0],
        ring_slot: items.ring_slot[0]
    };
    public bonuses = {
        'stab_attack': 0,
        'slash_attack': 0,
        'crush_attack': 0,
        'magic_attack': 0,
        'ranged_attack': 0,
        'stab_defence': 0,
        'slash_defence': 0,
        'crush_defence': 0,
        'magic_defence': 0,
        'ranged_defence': 0,
        'melee_strength': 0,
        'ranged_strength': 0,
        'magic_damage': 0,
        'prayer_bonus': 0,
        'undead_bonus': 0,
        'slayer_bonus': 0,
        'dragon_bonus': 0,
        'demon_bonus': 0
    };
    
    constructor() {
        let weaponType = weaponTypes[this.gear.weapon_slot.weapon_category];
        this.selectedCombatStyle = weaponType[Object.keys(weaponType)[0]];
    }

    
    ngOnInit() {
        
    }

    public equip(item, slot: string) {
        this.gear[slot] = item;
        if (item.two_handed) {
            this.gear.shield_slot = this.items.shield_slot[0];
        }
        if (slot === 'shield_slot' && item !== this.items.shield_slot[0] && this.gear.weapon_slot.two_handed) {
            this.gear.weapon_slot = this.items.weapon_slot[0];
        }
        if (slot === 'weapon_slot') {
            let weaponType = weaponTypes[item.weapon_category];
            this.selectedCombatStyle = weaponType[Object.keys(weaponType)[0]];
        }
        
        this.updateBonuses();
    }

    private updateBonuses() {
        for (let bonus in this.bonuses) {
            this.bonuses[bonus] = 0;
        }
        for (let slot in this.gear) {
            for (let bonus in this.bonuses) {
                this.bonuses[bonus] += this.gear[slot][bonus];
            }
        }
    }
}
