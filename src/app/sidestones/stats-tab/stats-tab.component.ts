import { Component, OnInit, ViewChild } from '@angular/core';
import { StatService } from 'src/app/shared/services/stat.service';
import { DropdownSelectorComponent } from 'src/app/shared/dropdown-selector/dropdown-selector.component';
import { SpellService } from 'src/app/shared/services/spell.service';

@Component({
    selector: 'app-stats-tab',
    templateUrl: './stats-tab.component.html',
    styleUrls: ['./stats-tab.component.scss']
})
export class StatsTabComponent implements OnInit {

    public objectKeys = Object.keys;

    public selectableItems;
    public selectedBoostType;

    @ViewChild(DropdownSelectorComponent) dropdown;
    
    constructor(public statService: StatService) {
    }
    
    ngOnInit() {
    }

    public openDropdown(boostType, event) {
        this.selectableItems = this.statService.boosts.filter((boost) => {
            return boost.boosts.hasOwnProperty(boostType);
        });
        if (this.selectedBoostType === boostType) {
            this.dropdown.opened = !this.dropdown.opened;
        } else {
            this.dropdown.open(this.selectableItems, event);
        }
        this.selectedBoostType = boostType;
    }
    
    public useBoost(boost) {
        this.statService.boost(boost, this.selectedBoostType);
    }
}
