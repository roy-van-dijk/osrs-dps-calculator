import { Component, OnInit, ViewChild } from '@angular/core';
import { OpponentService } from '../shared/services/opponent.service';
import { DropdownSelectorComponent } from '../shared/dropdown-selector/dropdown-selector.component';

@Component({
    selector: 'app-opponent',
    templateUrl: './opponent.component.html',
    styleUrls: ['./opponent.component.scss']
})
export class OpponentComponent implements OnInit {

    public objectKeys = Object.keys;

    @ViewChild(DropdownSelectorComponent) dropdown;

    constructor(private opponentService: OpponentService) { }

    ngOnInit() {
    }

    public openDropdown(event) {
        if (this.dropdown.opened) {
            this.dropdown.opened = false;
        } else {
            this.dropdown.open(this.opponentService.opponents, event);
        }
    }

    public selectOpponent(opponent) {
        this.opponentService.selectOpponent(opponent);
    }
}
