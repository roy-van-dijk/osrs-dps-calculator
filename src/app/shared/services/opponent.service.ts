import { Injectable } from '@angular/core';
import opponents from '../../../assets/config/opponents.json';

@Injectable({
    providedIn: 'root'
})
export class OpponentService {

    public opponents = opponents;

    public selectedOpponent = this.opponents[2];

    constructor() { }

    public selectOpponent(selectedOpponent) {
        this.opponents.forEach((opponent, index) => {
            if (selectedOpponent === opponent) {
                this.selectedOpponent = this.opponents[index];
            }
        });
    }
}
