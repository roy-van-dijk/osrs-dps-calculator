import { Component, OnInit, ElementRef } from '@angular/core';
import { SpellService } from 'src/app/shared/services/spell.service';

@Component({
    selector: 'app-spellbook-tab',
    templateUrl: './spellbook-tab.component.html',
    styleUrls: ['./spellbook-tab.component.scss']
})
export class SpellbookTabComponent implements OnInit {

    public objectKeys = Object.keys;
    public spellbook: string = 'normals';
    public hoveredSpell = null;
    private spellInfoTop = false;
    
    constructor(public spellService: SpellService, private elem: ElementRef) { }
    
    ngOnInit() {
    }

    public activateSpell(spell) {
        if (this.spellService.activeSpell === spell) {
            this.spellService.activeSpell = null;
        } else {
            this.spellService.activeSpell = spell;
        }
    }

    public unhoverSpell() {
        this.hoveredSpell = null;
    }

    public hoverSpell(spell, event) {
        let rect = this.elem.nativeElement.querySelector('#spells-wrapper').getBoundingClientRect();
        let y = event.clientY - rect.top;
        if (y > (rect.height / 2)) {
            this.spellInfoTop = true;
        } else {
            this.spellInfoTop = false;
        }
        this.hoveredSpell = spell;
    }

    public swapSpellbook() {
        if (this.spellbook === 'normals') {
            this.spellbook = 'ancients';
        } else {
            this.spellbook = 'normals';
        }
    }
    
}
