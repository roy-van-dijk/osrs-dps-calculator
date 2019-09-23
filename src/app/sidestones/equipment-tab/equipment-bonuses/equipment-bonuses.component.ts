import { Component, OnInit } from '@angular/core';
import { EquipmentService } from 'src/app/shared/services/equipment.service';

@Component({
    selector: 'app-equipment-bonuses',
    templateUrl: './equipment-bonuses.component.html',
    styleUrls: ['./equipment-bonuses.component.scss']
})
export class EquipmentBonusesComponent implements OnInit {
    
    constructor(private equipmentService: EquipmentService) { }
    
    ngOnInit() {
    }
    
}
