import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { PetsComponent } from './pets/pets.component';
import { PetListComponent } from './pets/pet-list/pet-list.component';
import { UserPetsComponent } from './user-pets/user-pets.component';
import { StoriesComponent } from './stories/stories.component';

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'dashboard', component: UserPetsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'stories', component: StoriesComponent},
  { path: 'pets', component: PetsComponent, 
    children: [
      { path: 'list', component: PetListComponent },
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }