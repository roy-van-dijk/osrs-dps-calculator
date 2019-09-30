import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

    @Input() title = '';
    @Output() closeEvent = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    public close() {
        this.closeEvent.emit();
    }

}
