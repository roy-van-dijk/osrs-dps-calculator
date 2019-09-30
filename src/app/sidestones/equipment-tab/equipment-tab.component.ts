import { Component, OnInit, ElementRef } from '@angular/core';
import { EquipmentService } from 'src/app/shared/services/equipment.service';

@Component({
    selector: 'app-equipment-tab',
    templateUrl: './equipment-tab.component.html',
    styleUrls: ['./equipment-tab.component.scss']
})
export class EquipmentTabComponent implements OnInit {
    
    constructor(private equipmentService: EquipmentService, private elem: ElementRef) { }
    
    ngOnInit() {
        
    }
    
}
