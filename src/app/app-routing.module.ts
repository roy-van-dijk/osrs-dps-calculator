import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EquipmentTabComponent } from './sidestones/equipment-tab/equipment-tab.component';
import { CombatTabComponent } from './sidestones/combat-tab/combat-tab.component';
import { PrayerTabComponent } from './sidestones/prayer-tab/prayer-tab.component';
import { SpellbookTabComponent } from './sidestones/spellbook-tab/spellbook-tab.component';
import { StatsTabComponent } from './sidestones/stats-tab/stats-tab.component';

const routes: Routes = [
    {
        path: 'combat-tab',
        component: CombatTabComponent
    },
    {
        path: 'stats-tab',
        component: StatsTabComponent
    },
    {
        path: 'equipment-tab',
        component: EquipmentTabComponent
    },
    {
        path: 'prayer-tab',
        component: PrayerTabComponent
    },
    {
        path: 'spellbook-tab',
        component: SpellbookTabComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
