import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscoverComponent } from './components/discover/discover.component';
import { HomeComponent } from './components/home/home.component';
import { MatchesComponent } from './components/matches/matches.component';
import { NotesComponent } from './components/notes/notes.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [

  {
    path: "",
    component: HomeComponent,
    children: [
      {
        path: "",
        redirectTo: "discover",
        pathMatch: "full"
      },
      {
        path: "discover",
        component: DiscoverComponent
      },
      {
        path: "notes",
        component: NotesComponent
      },
      {
        path: "matches",
        component: MatchesComponent
      },
      {
        path: "profile",
        component: ProfileComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilesModuleRoutingModule { }
