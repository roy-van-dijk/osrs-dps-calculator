import { Component, OnInit, Input, ElementRef, Output, AfterViewInit } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
    selector: 'app-dropdown-selector',
    templateUrl: './dropdown-selector.component.html',
    styleUrls: ['./dropdown-selector.component.scss']
})
export class DropdownSelectorComponent implements OnInit, AfterViewInit {

    @Input() opened = false;

    @Output() itemClicked = new EventEmitter();

    private items;
    public shownItems;
    private dropdown;
    private disabledKeys = ['ArrowDown', 'ArrowUp', 'Enter', 'Escape'];
    private selectedItem;
    
    constructor(private elem: ElementRef) { }
    
    ngOnInit() {
    }

    ngAfterViewInit() {
        this.dropdown = this.elem.nativeElement.querySelector('#dropdown-selector');
    }

    private open(items, event) {
        this.opened = true;
        let searchBox =  this.elem.nativeElement.querySelector('#item-search');
        this.dropdown.style = 'position: absoute;' + 'left: ' + event.clientX + 'px; top: '  + event.clientY + 'px;';
        searchBox.focus();
        this.items = items;
        this.shownItems = items;
        this.selectedItem = this.shownItems[0];
    }

    private close() {
        this.opened = false;
        let searchBox = this.elem.nativeElement.querySelector('#item-search');
        searchBox.value = '';
        searchBox.blur();
    }


    public searchBoxKeyUp(event) {
        event.preventDefault();
        if (!this.disabledKeys.includes(event.key)) {
            this.searchItems(event);
        }
        if (event.key === 'Escape') {
            this.close();
        }
    }

    private searchItems(event) {
        let searchTerm = event.srcElement.value.toLowerCase();
        let filteredResults = this.items.filter((item) => {
            return item.name.toLowerCase().includes(searchTerm);
        });
        this.shownItems = filteredResults;
        if (this.shownItems.length !== 0) {
            this.selectedItem = this.shownItems[0];
        }
    }

    private select(item) {
        this.selectedItem = item;
        this.selectCurrentDropdownItem();
    }

    public selectCurrentDropdownItem() {
        this.itemClicked.emit(this.selectedItem);
        this.close();
    }

    public selectPrevDropdownItem() {
        for (let i = 0; i < this.shownItems.length; i++) {
            if (this.shownItems[i] === this.selectedItem && i > 0) {
                this.selectedItem = this.shownItems[i-1];
                return;
            }
        }
    }

    public selectNextDropdownItem() {
        for (let i = 0; i < this.shownItems.length; i++) {
            if (this.shownItems[i] === this.selectedItem && i < (this.shownItems.length - 1)) {
                this.selectedItem = this.shownItems[i+1];
                return;
            }
        }
    }
    
}
