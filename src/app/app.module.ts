import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidestonesComponent } from './sidestones/sidestones.component';
import { CombatTabComponent } from './sidestones/combat-tab/combat-tab.component';
import { EquipmentTabComponent } from './sidestones/equipment-tab/equipment-tab.component';
import { PrayerTabComponent } from './sidestones/prayer-tab/prayer-tab.component';
import { SpellbookTabComponent } from './sidestones/spellbook-tab/spellbook-tab.component';
import { EquipmentSelectorComponent } from './sidestones/equipment-tab/equipment-selector/equipment-selector.component';
import { EquipmentBonusesComponent } from './sidestones/equipment-tab/equipment-bonuses/equipment-bonuses.component';
import { StatsTabComponent } from './sidestones/stats-tab/stats-tab.component';
import { DropdownSelectorComponent } from './shared/dropdown-selector/dropdown-selector.component';
import { ModalComponent } from './shared/modal/modal.component';
import { CalculationResultsComponent } from './calculation-results/calculation-results.component';
import { LoadoutComponent } from './loadout/loadout.component';
import { CountUpModule } from 'countup.js-angular2';
import { MaxHitService } from './shared/services/max-hit.service';
import { OpponentComponent } from './opponent/opponent.component';

@NgModule({
  declarations: [
    AppComponent,
    SidestonesComponent,
    CombatTabComponent,
    EquipmentTabComponent,
    PrayerTabComponent,
    SpellbookTabComponent,
    EquipmentSelectorComponent,
    EquipmentBonusesComponent,
    StatsTabComponent,
    DropdownSelectorComponent,
    ModalComponent,
    CalculationResultsComponent,
    LoadoutComponent,
    OpponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountUpModule
  ],
  providers: [
    MaxHitService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
