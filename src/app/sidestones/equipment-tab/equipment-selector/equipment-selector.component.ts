import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { EquipmentService } from 'src/app/shared/services/equipment.service';
import { DropdownSelectorComponent } from 'src/app/shared/dropdown-selector/dropdown-selector.component';

@Component({
    selector: 'app-equipment-selector',
    templateUrl: './equipment-selector.component.html',
    styleUrls: ['./equipment-selector.component.scss']
})
export class EquipmentSelectorComponent implements OnInit {
    
    public objectKeys = Object.keys;
    public selectableItems = [];
    public selectedGearType: string;
    @ViewChild(DropdownSelectorComponent) dropdown;

    constructor(public equipmentService: EquipmentService) { }
    
    ngOnInit() {    
    }


    private openDropdown(gearType, event) {
        this.selectableItems = this.equipmentService.items[gearType];
        if (this.selectedGearType === gearType) {
            this.dropdown.opened = !this.dropdown.opened;
        } else {
            this.dropdown.open(this.selectableItems, event);
        }
        this.selectedGearType = gearType;
    }

    public equip(item) { 
        this.equipmentService.equip(item, this.selectedGearType);
    }


}
