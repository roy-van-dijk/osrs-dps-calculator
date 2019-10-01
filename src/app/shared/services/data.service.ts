import { Injectable } from '@angular/core';
import items from '../../../assets/config/items.json';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    public items = items;

    constructor() { }
}
