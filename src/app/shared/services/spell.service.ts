import { Injectable } from '@angular/core';
import spells from '../../../assets/config/spells.json';
import runes from '../../../assets/config/runes.json';

@Injectable({
    providedIn: 'root'
})
export class SpellService {
    
    public spells = spells;
    public runes = runes;
    public activeSpell;
    
    constructor() { }
}
