import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilesModuleRoutingModule } from './profiles-module-routing.module';
import { DiscoverComponent } from './components/discover/discover.component';
import { NotesComponent } from './components/notes/notes.component';
import { MatchesComponent } from './components/matches/matches.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    DiscoverComponent,
    NotesComponent,
    MatchesComponent,
    ProfileComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ProfilesModuleRoutingModule
  ]
})
export class ProfilesModule { }
