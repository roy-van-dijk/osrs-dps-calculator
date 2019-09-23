import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
    selector: 'app-sidestones',
    templateUrl: './sidestones.component.html',
    styleUrls: ['./sidestones.component.scss']
})
export class SidestonesComponent implements OnInit {
    
    constructor(private elem: ElementRef) { }
    
    ngOnInit() {
    }
}
